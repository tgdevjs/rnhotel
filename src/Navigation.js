import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Ionicons from "react-native-vector-icons/MaterialIcons";

import {
  Hotels,
  ConfirmReservationQuery,
  SearchCalendar,
  SearchWithQuery,
  AccountWithQuery,
  SignInModalWithQuery,
  JoinModalWithQuery,
  ReservationsWithQuery
} from "./screens";

const SearchStack = createStackNavigator({
  Search: {
    screen: SearchWithQuery
  },
  Calendar: {
    screen: SearchCalendar
  },
  Hotels: {
    screen: Hotels
  },
  ConfirmReservation: {
    screen: ConfirmReservationQuery
  }
});

const AccountStack = createStackNavigator({
  Account: {
    screen: AccountWithQuery
  }
});

const StaysStack = createStackNavigator({
  Stays: {
    screen: ReservationsWithQuery
  }
});

const icons = { Search: "search", Account: "person", Stays: "event" };

const bottomTabNavigator = createBottomTabNavigator(
  {
    Search: SearchStack,
    Account: AccountStack,
    Stays: StaysStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const iconName = icons[navigation.state.routeName];

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "navy",
      inactiveTintColor: "gray"
    }
  }
);

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: bottomTabNavigator
    },
    SignIn: {
      screen: SignInModalWithQuery
    },
    Join: {
      screen: JoinModalWithQuery
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
