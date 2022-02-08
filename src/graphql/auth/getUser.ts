import { GetUserFn } from "../../types/auth"

const getUser:GetUserFn = (token: string) => {
    const roles = ['UNKNOWN', 'USER', 'REVIEWER', 'ADMIN']
    return {
      hasRole: (role: string) => {
        const tokenIndex = roles.indexOf(token)
        const roleIndex = roles.indexOf(role)
        return roleIndex >= 0 && tokenIndex >= roleIndex
      }
    }
}

export default getUser