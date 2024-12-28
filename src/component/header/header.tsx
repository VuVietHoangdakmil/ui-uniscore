import Container from "../container/container-wrap-width";
import styles from "./index.module.scss";
import { CiUser } from "react-icons/ci";
const Header: React.FC = () => {
  return (
    <header className="sticky top-0 w-full h-[62px] bg-gradient-header z-[9999]">
      <Container>
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <img src="./Icons/logo+hamburger.png" />
            <div className="min-h-[38px] p-[1px]  ml-8 hover:opacity-50 hover:cursor-pointer  rounded-[87px]  bg-gradient-border">
              <div className=" h-full bg-gradient-button flex items-center justify-around rounded-[87px] p-2 flex-wrap     ">
                <img width={20} height={20} src="./Icons/Football-icon.svg" />
                <div className={`${styles["text-css"]} ml-2`}>FOOTBALL</div>
              </div>
            </div>
          </div>

          <div className="w-[36px] h-[36px] hover:opacity-50 hover:cursor-pointer rounded-full  flex items-center justify-center bg-[#02020F26]">
            <CiUser fontSize={20} />
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
