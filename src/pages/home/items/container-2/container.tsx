import ContainerItem from "@/component/container/container-item";
import Left from "./Left";
import Right from "./Right";
const Container = () => {
  return (
    <ContainerItem className="sm:pr-0 mt-6">
      <div className="grid gap-4 sm:grid-cols-2 min-h-[324px]  ">
        <Left />

        <Right />
      </div>
    </ContainerItem>
  );
};
export default Container;
