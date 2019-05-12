import { AsyncStorage } from "react-native";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { CachePersistor } from "apollo-cache-persist";
import moment from "moment";

import { clientState } from "./client-state";
import { currentSearchQuery } from "./client-state/search";

const cache = new InMemoryCache();

export const client = new ApolloClient({
  cache,
  clientState,
  uri: "https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev"
});

const persistor = new CachePersistor({
  cache: client.cache,
  key: "cache",
  storage: AsyncStorage
});

export const restoreCache = async () => {
  const version = "0.0.0";
  const cacheVersionKey = "cacheVersion";
  const cacheVersion = await AsyncStorage.getItem(cacheVersionKey);

  if (version === cacheVersion) {
    await persistor.restore();
  } else {
    await persistor.purge();
    await AsyncStorage.setItem(cacheVersionKey, version);
  }

  // reset cache for startDay in search if it is before current date
  const {
    currentSearch: { startDay }
  } = client.readQuery({ query: currentSearchQuery });
  const startMoment = moment(startDay);
  const now = moment();

  if (!startMoment.isValid() || startMoment.isBefore(now)) {
    client.writeData({
      data: {
        currentSearch: {
          __typename: "Search",
          startDay: now.format(moment.HTML5_FMT.DATE),
          endDay: now.add(1, "days").format(moment.HTML5_FMT.DATE)
        }
      }
    });
  }
};

// initialize client state with defaults
client.writeData({ data: clientState.defaults });
