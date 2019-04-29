import { merge } from 'lodash';

import * as search from './search';
import * as user from './user';
import * as userList from './userList';

const test = { clientState: { defaults: { hello: 1 } } };
const typeList = [test, search, user, userList];
const mergedLists = merge({}, ...typeList);
const { clientState } = mergedLists;

// set typeDefs to an array of typeDef definitions
clientState.typeDefs = typeList.map(type => type.clientState.typeDefs);

export { clientState };
