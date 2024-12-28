import { Team } from "./team"
export interface Player   {
    id: string,
    name: string
    slug: string,
    shortName: string,
    team: Team,
    position: string,
    height: number,
    preferredFoot: string,
    dateOfBirthTimestamp: number,
    contractUntilTimestamp:number
    proposedMarketValueRaw: {
        value: number,
        currency: string
    },
    nationality: {
        id: string,
        name:string
    }
}