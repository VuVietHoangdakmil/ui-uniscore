import { Category } from "./category"


export interface  Event {
                id: string,
                homeScore: {
                    current: number,
                    display: number,
                    period1: number,
                    period2: number,
                    corner: number,
                    yellow_card: number,
                    red_card: number,
                    overTime_score: number,
                    penalty_score: number
                },
                tournament: {
                    id: string,
                    priority: number,
                    name: string,
                    slug: string,
                    category: Category ,
                    group_num: number,
                },
                homeTeam: {
                    id: string,
                    name: string,
                    slug: string,
                    shortName:string
                },
                awayScore: {
                    current: number,
                    display: number,
                    period1: number,
                    period2: number,
                    corner: number,
                    yellow_card: number,
                    red_card: number,
                    overTime_score: number,
                    penalty_score: number
                },
                awayTeam: {
                    id: string,
                    name: string,
                    slug: string,
                    shortName: string
                },
                status: {
                    code: number,
                    description: string,
                    type: string
                },
                winnerCode: number,
                startTimestamp: number,
                stage_id: string
            }