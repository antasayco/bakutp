import { mergeResolvers } from '@graphql-tools/merge';
import { IResolvers } from '@graphql-tools/utils';

import auth from './resolvers/auth'

const resolvers:IResolvers = mergeResolvers([
    auth
])

export default resolvers