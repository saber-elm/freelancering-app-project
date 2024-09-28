import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout({ children }) {
  return (
    <div className="grid md:grid-rows-[auto_1fr] sm:grid-cols-1 md:grid-cols-[15rem_1fr] h-screen">
      <Header />
      {/* <Sidebar /> */}
      {children}
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
