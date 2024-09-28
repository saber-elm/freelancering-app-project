function Sidebar({ children }) {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 border-l border-gray-200 p-4">
      <ul className="flex flex-col gap-y-4">
        {children}
        {/* <li>
          <CustomNavLink to="/owner/dashboard">
            <HiHome />
            <span>داشبورد</span>
          </CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/owner/projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomNavLink>
        </li> */}
      </ul>
    </div>
  );
}

export default Sidebar;

// function CustomNavLink({ to, children }) {
//   const navLinkClass =
//     "flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 px-2 py-1.5 rounded-lg transition-all duration-300";
//   return (
//     <NavLink
//       to={to}
//       className={({ isActive }) =>
//         isActive
//           ? `${navLinkClass} bg-primary-100 text-primary-900`
//           : `${navLinkClass} text-secondary-600`
//       }
//     >
//       {children}
//     </NavLink>
//   );
// }
