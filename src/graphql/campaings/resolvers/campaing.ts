import { IResolvers } from "@graphql-tools/utils"
import Campaings from "../../../models/Campaings"

const campaings: IResolvers = {
    Query:{
        campaingData: async (_,{id}) => {
            return {
                name:"juan"
            }
        }
    },
    Mutation:{
        addCampaingData: async (_,{name}) => {
            return {
                name
            }
        }
    }
}

export default campaings