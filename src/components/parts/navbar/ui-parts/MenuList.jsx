import { NavLink } from "react-router-dom";

const MenuList = () => {
  return (
    <>
      <li>
        <NavLink to="/courses">Courses</NavLink>
      </li>

      <li>
        <NavLink to="/skills">Skills</NavLink>
      </li>

      <li>
        <NavLink to="/films">Films</NavLink>
      </li>

      <li>
        <NavLink to="/projects">Projects</NavLink>
      </li>
    </>
  );
};

export default MenuList;
