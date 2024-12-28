import {Event} from "../event"
export interface Matches {
    code: number,
    data: {
        events: Event[]
    },
    message: string
}