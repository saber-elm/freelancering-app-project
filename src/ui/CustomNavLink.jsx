import { NavLink } from "react-router-dom";

export default function CustomNavLink({ to, children }) {
  const navLinkClass =
    "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 px-2 py-1.5 rounded-lg transition-all duration-300";
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navLinkClass} bg-primary-100 text-primary-900`
            : `${navLinkClass} text-secondary-600`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
