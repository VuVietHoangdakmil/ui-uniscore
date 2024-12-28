import dayjs from "dayjs"
const getAgeCurrent =(date: number|string|Date)=>{
    return dayjs().year() - dayjs(date).year()
}

const scoreCompare = ( scoreTeamCurrent :number, scroeTeamRemaining:number)=>{
    if (scoreTeamCurrent > scroeTeamRemaining) {
        return "WIN"
    }
    if (scoreTeamCurrent < scroeTeamRemaining) {
        return "LOSE"
    }
    return "DRAW"

}
export {getAgeCurrent, scoreCompare} 