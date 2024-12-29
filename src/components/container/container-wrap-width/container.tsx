type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="desktop:w-[1376px] w-[95%]  mx-auto my-0 h-full">
      {children}
    </div>
  );
};
export default Container;
