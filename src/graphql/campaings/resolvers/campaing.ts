import { IResolvers } from "@graphql-tools/utils"
import { campaingsDB } from "../../../database"
import CampaingsData from "../../../models/CampaingsData"

const campaings: IResolvers = {
    Query:{
        campaingData: async (_,{id}) => {
            return {
                name:"juan"
            }
        },
        campaingsData: async () => {
            const CampaingModel = campaingsDB.model("CampaingsData",CampaingsData, "pedro")
            const Campaing = new CampaingModel({juan:"pedro"})
            await Campaing.save(); 
            return [
                {
                    name:"rainbow",
                    properties:[
                        {
                            key:"c",
                            value: "d"
                        },
                        {
                            key:"c",
                            value: "d"
                        }
                    ]
                }
            ]
        }
    }
}

export default campaings