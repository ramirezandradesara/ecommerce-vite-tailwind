import { NavLink } from "react-router-dom";
import { NAVLINKS_HOME, NAVLINKS_PLATFORM } from "../../data/navigations";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4";

  const NavLinkStyled = ({ to, text }: { to: string; text: string }) => (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      {text}
    </NavLink>
  );

  const renderNavLinks = (linkArr: { to: string; text: string }[]) => {
    return (
      <>
        {linkArr.map(({ to, text }) => (
          <li>
            <NavLinkStyled to={to} text={text} />
          </li>
        ))}
      </>
    );
  };

  return (
    <nav className="flex justify-between items-end fixed z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to={"/"}>Shopi</NavLink>
        </li>
        {renderNavLinks(NAVLINKS_HOME)}
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">saraandrade@gmail.com</li>
        {renderNavLinks(NAVLINKS_PLATFORM)}
        <li>🛒 0</li>
      </ul>
    </nav>
  );
};

export default Navbar;
