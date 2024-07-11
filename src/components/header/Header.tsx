import Logo from "../../assets/images/Logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-center fixed top-12 w-full">
      <div className="w-[186px]">
        <img src={Logo} alt="" className="w-fit" />
      </div>
    </div>
  );
};

export default Header;
