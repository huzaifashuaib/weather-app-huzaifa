import Logo from "../../assets/images/Logo.svg";

const Header = () => {
  return (
    <div className="flex items-center justify-center fixed top-[49px] sm:top-12 w-full ">
      <div className="w-[178px] sm:w-[186px]">
        <img src={Logo} alt="" className="w-fit" />
      </div>
    </div>
  );
};

export default Header;
