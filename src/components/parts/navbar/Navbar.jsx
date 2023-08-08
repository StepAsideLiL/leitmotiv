import LoginAndProfile from "./ui-parts/LoginAndProfile";
import Logo from "./ui-parts/Logo";
import Menus from "./ui-parts/Menus";

const Navbar = () => {
  return (
    <header className="container py-2 mx-auto max-w-7xl">
      <div className="navbar bg-base-100">
        <Logo />

        <Menus />

        <LoginAndProfile />
      </div>
    </header>
  );
};

export default Navbar;
