import { Category } from "./category"
import { Tournament } from "./tournament"
export interface Team{
    id: string,
    name: string,
    slug: string,
    sport: {
        name: string,
        slug: string
    },
    tournament: Tournament,
    primaryUniqueTournament: {
        name: string,
        slug: string,
        category: Category
    },
    country: {
        id: string,
        name:string
    }
}