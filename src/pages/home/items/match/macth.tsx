import ContainerItem from "@/component/container/container-item";
import macthes from "@/files/matchList.json";
import { Matches } from "@/types/data/maches";
import { Event } from "@/types/event";
import { scoreCompare } from "@/utils/actions";
import { cn } from "@/utils/helper/class.helper";
import dayjs from "dayjs";

const colors = (homeTeamScore: number, awayTeamScore: number) => {
  const result = scoreCompare(homeTeamScore, awayTeamScore);
  return {
    "bg-[#2187E5]": result === "WIN",
    "bg-gradient-score-lose": result === "LOSE",
    "bg-yellow-500": result === "DRAW",
  };
};
const Item: React.FC<{ event: Event }> = ({
  event: {
    id,
    homeTeam,
    homeScore: { display: homeTeamScore },
    awayScore: { display: awayTeamScore },
    awayTeam,
    status: { type },
    startTimestamp,
  },
}) => {
  return (
    <div
      key={id}
      className="rounded-md mb-2 p-[1px]"
      style={{
        background:
          "linear-gradient(128.77deg, rgba(9, 55, 148, 0.28) 1.2%, rgba(9, 55, 148, 0.28) 50.89%, rgba(9, 55, 148, 0.28) 100.58%)",
      }}
    >
      <div
        className="h-full rounded-md p-2  items-center flex  justify-between flex-wrap"
        style={{
          background:
            "linear-gradient(124.54deg, rgba(10, 31, 85, 0.4) 0%, rgba(16, 44, 115, 0.4) 27.66%, rgba(12, 26, 76, 0.4) 70.02%)",
        }}
      >
        <div className="flex items-center">
          <div className="text-text-primary text-[13px] font-[400] text-center">
            <p>{dayjs(startTimestamp).format("DD/MM")}</p>
            <p>{type.toUpperCase()}</p>
          </div>
          <div className="text-[13px] font-[400] ml-3">
            <div className="flex items-center">
              <img
                src={`https://img.uniscore.com/football/team/${homeTeam.id}/image/small`}
                // src="Icons/Spain.svg"
                className="w-[20px] h-[20px] mr-2"
              />
              <p
                className={cn({
                  "text-text-primary":
                    scoreCompare(homeTeamScore, awayTeamScore) === "WIN",
                })}
              >
                {homeTeam.name}
              </p>
            </div>
            <div className="flex items-center mt-1">
              <img
                src={`https://img.uniscore.com/football/team/${awayTeam.id}/image/small`}
                //   src="Icons/Spain.svg"
                className="w-[20px] h-[20px] mr-2"
              />
              <p
                className={cn({
                  "text-text-primary":
                    scoreCompare(awayTeamScore, homeTeamScore) === "WIN",
                })}
              >
                {awayTeam.name}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center  ">
          <div className="w-[22px] h-[46px] rounded-md overflow-hidden ">
            <div
              className={cn(
                " h-1/2 flex items-center justify-center",
                colors(homeTeamScore, awayTeamScore)
              )}
            >
              {homeTeamScore}
            </div>
            <div
              className={cn(
                "bg-gradient-score-win  flex items-center h-1/2  justify-center ",
                colors(awayTeamScore, homeTeamScore)
              )}
            >
              {awayTeamScore}
            </div>
          </div>
          <div className=" ml-3 w-[24px] h-[24px] flex items-center  justify-center text-[14px] rounded-sm font-[600] bg-[#2EA76F]">
            8.1
          </div>
        </div>
      </div>
    </div>
  );
};
const Match = () => {
  const {
    data: { events },
  } = macthes as Matches;

  return (
    <ContainerItem className="mt-6 mb-9">
      <h1 className="font-[700] py-4 text-[14px]">MATCHES</h1>
      <div className="h-[60vh] overflow-auto">
        <div>
          {events.map((match) => (
            <Item key={match.id} event={match} />
          ))}
        </div>
      </div>
    </ContainerItem>
  );
};
export default Match;
