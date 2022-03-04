import {GraphQLSchema, GraphQLObjectType, GraphQLString, ThunkObjMap, GraphQLFieldConfig, } from 'graphql'
import Campaings from '../../../models/Campaings';

const getSchema = async () => {
    const campaings = await Campaings.find()

    const getCampaing:ThunkObjMap<GraphQLFieldConfig<any, any, any>> = () => {
        let fields = {}
        campaings.forEach(campaing=>fields[campaing.id] = {type: GraphQLString})
        return fields
    }
    
    const GraphQLCampaingDataType = new GraphQLObjectType({
        name: 'CampaingData',
        fields: getCampaing
    })
    
    const schema = new GraphQLSchema({
        query: new GraphQLObjectType({
            name: 'Query',
            fields: {
                campaingData: {
                    type: GraphQLCampaingDataType,
                    args: {
                        campaingId: { type: GraphQLString },
                    }
                },
            },
        }),
        mutation: new GraphQLObjectType({
            name: 'Mutation',
            fields: {
                addCampaingData: {
                    type: GraphQLCampaingDataType,
                    args: {
                        name: { type: GraphQLString },
                    }
                }
            }
        })
    });

    return [schema]
}

export default getSchema