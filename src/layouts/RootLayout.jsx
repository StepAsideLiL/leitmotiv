import { Outlet } from "react-router-dom";
import Navbar from "../components/parts/navbar/Navbar";
import Footer from "../components/parts/footer/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
};

export default RootLayout;
