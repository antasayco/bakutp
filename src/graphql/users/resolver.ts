import { mergeResolvers } from '@graphql-tools/merge';
import { IResolvers } from '@graphql-tools/utils';

import users from './resolvers/users';
import user from './resolvers/user';

const resolvers:IResolvers = mergeResolvers([
    user,
    users
])

export default resolvers