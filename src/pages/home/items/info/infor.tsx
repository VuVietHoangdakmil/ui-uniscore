import ContainerItem from "@/component/container/container-item";
import dataJson from "@/files/playerInfo.json";
import { Info as InfoType } from "@/types/data/info";
import Name from "./Left";
import General from "./Right";

const Info: React.FC = () => {
  const {
    data: { player },
  }: InfoType = dataJson;
  return (
    <ContainerItem className="sm:pr-0">
      <div className="grid gap-4  sm:grid-cols-2  ">
        <Name
          playerId={player.id}
          playerName={player.name}
          teamName={player.team.name}
          teamId={player.team.id}
          contractDate={player.contractUntilTimestamp}
        />

        <General
          height={player.height}
          nationalityName={player.nationality.name}
          preferredFoot={player.preferredFoot ?? ""}
          birthdate={player.dateOfBirthTimestamp}
          position={player.position}
          shirtNumber={10}
        />
      </div>
    </ContainerItem>
  );
};
export default Info;
