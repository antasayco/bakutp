import { IResolvers } from "@graphql-tools/utils"
import { campaingsDB } from "../../../database"
import Campaings from "../../../models/Campaings"

const campaings: IResolvers = {
    Query:{
        campaing: async (_,{id}) => {
            const campaing = await Campaings.findOne({id})
            return campaing
        }
    },
    Mutation:{
        addCampaing: async (_, {campaing}) => {
            //campaingsDB.model("")
            const newCampaing = new Campaings(campaing)
            await newCampaing.save()
            return newCampaing
        }
    }
}

export default campaings