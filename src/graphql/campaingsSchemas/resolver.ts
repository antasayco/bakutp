import { mergeResolvers } from '@graphql-tools/merge';
import { IResolvers } from '@graphql-tools/utils';
import campaings from './resolvers/campaing';

const resolvers:IResolvers = mergeResolvers([
    campaings
])

export default resolvers