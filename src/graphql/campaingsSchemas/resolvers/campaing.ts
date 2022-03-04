import { IResolvers } from "@graphql-tools/utils"
import Campaings from "../../../models/Campaings"

const campaings: IResolvers = {
    Query:{
        campaing: async (_,{id}) => {
            const campaing = await Campaings.findOne({id})
            return campaing
        },
        campaings: async () => {
            return await Campaings.find()
        }
    },
    Mutation:{
        addCampaing: async (_, {campaing}) => {
            const newCampaing = new Campaings(campaing)
            await newCampaing.save()
            return newCampaing
        },
        updateCampaing: async (_, {id, newCampaing}) => {
            const updateCampaing = await Campaings.findOneAndUpdate({id},newCampaing, {new:true})
            return updateCampaing
        }
    }
}

export default campaings