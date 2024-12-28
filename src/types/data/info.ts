import { Player } from "../player"
export interface Info {
    code: number,
    data: {
        player: Player 
    },
    message: string
}