import { GetUserFn } from "../../types/auth"

const getUser:GetUserFn = (token: string) => {
    const resources: string[] = [
      "ADMIN",
      "GET_USERS",
      "GET_USER"
    ]
    console.log("TOKEN",token)
    const hasResource = (resourcesUser: string[]) => {
      return false
    }
    
    return {
      hasResource
    }
}

export default getUser