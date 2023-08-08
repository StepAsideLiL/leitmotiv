import logoWhite from "../../../assets/logos/Leitmotiv-white.png";
// import logoBlack from "../../../assets/logos/Leitmotiv-black.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-10 footer bg-base-200 text-base-content">
      <div>
        <img src={logoWhite} alt="Logo" className="w-24" />
        <p>
          Leitmotiv Academy
          <br />
          Dreaming in Films By{" "}
          <Link to="" className="link">
            StepAsideLiL
          </Link>
        </p>
      </div>

      <div>
        <span className="footer-title">Services</span>
        <Link className="link link-hover">Branding</Link>
        <Link className="link link-hover">Design</Link>
        <Link className="link link-hover">Marketing</Link>
        <Link className="link link-hover">Advertisement</Link>
      </div>

      <div>
        <span className="footer-title">Company</span>
        <Link className="link link-hover">About us</Link>
        <Link className="link link-hover">Contact</Link>
        <Link className="link link-hover">Jobs</Link>
        <Link className="link link-hover">Press kit</Link>
      </div>

      <div>
        <span className="footer-title">Legal</span>
        <Link className="link link-hover">Terms of use</Link>
        <Link className="link link-hover">Privacy policy</Link>
        <Link className="link link-hover">Cookie policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
