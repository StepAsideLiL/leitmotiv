import { Link } from "react-router-dom";
// import logoBlack from "../../../../assets/logos/Leitmotiv-black.png";
import logoWhite from "../../../../assets/logos/Leitmotiv-white.png";

const Logo = () => {
  return (
    <div className="navbar-start">
      <Link to="/">
        <img src={logoWhite} alt="Logo" className="w-14" />
      </Link>
    </div>
  );
};

export default Logo;
