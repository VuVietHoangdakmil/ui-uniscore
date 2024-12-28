import { Category } from "./category"

export interface Tournament {
    priority?: 9,
        name: string,
        slug: string,
        category: Category,
        uniqueTournament: {
            name: string,
            slug: string,
            category: Category,
            id: string,
            displayInverseHomeAwayTeams: boolean
        }
        group_num?: number
    }