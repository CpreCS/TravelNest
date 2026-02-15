import { NavLink } from "react-router-dom";

export default function NavItem({ to, icon: Icon, children, setIsOpen }) {
  return (

    <NavLink
      to={to}
      onClick={() => setIsOpen && setIsOpen(false)}
      className="flex items-center text-gray-800 font-semibold py-4 pl-6 tracking-wide transition-colors cursor-pointer"
    >
      {Icon && <Icon className="h-6 w-6 mr-4 md:mr-0 lg:mr-4" />}
      <span className="block">
        {children}
      </span>
    </NavLink>
  );
}
