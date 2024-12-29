import Container from "../container/container-wrap-width";
import { IoIosMenu } from "react-icons/io";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import SlidingPane from "react-sliding-pane";
import Button from "../buttons/header";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "./index.scss";
import Avartar from "../Avatar";
type Props = {
  className?: string;
};
const DrawMenu: React.FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => {
    setIsOpen(false);
  };
  const open = () => {
    setIsOpen(true);
  };
  return (
    <div className={className}>
      <IoIosMenu
        className="hover:opacity-40 hover:cursor-pointer"
        fontSize={20}
        onClick={open}
      />
      <SlidingPane isOpen={isOpen} onRequestClose={close} from="right">
        <>
          <div className="flex items-center justify-between">
            <IoMdClose
              fontSize={20}
              onClick={close}
              className="hover:opacity-40 hover:cursor-pointer"
            />
            <Avartar />
          </div>
          <Button className="mt-6" centerItem={true} />
        </>
      </SlidingPane>
    </div>
  );
};
const Header: React.FC = () => {
  return (
    <header className="sticky top-0 w-full h-[62px] bg-gradient-header ">
      <Container>
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <img src="./Icons/logo+hamburger.png" />
            <Button className="ml-8  max-sm:hidden" />
          </div>

          <Avartar className="max-sm:hidden" />
          <DrawMenu className="sm:hidden" />
        </div>
      </Container>
    </header>
  );
};
export default Header;
