import Loading from "../../ui/Loading";
import useOwnerProjects from "../projects/useOwnerProjects";
import DashboardHeader from "./DashboardHeader";
import Stats from "./Stats";

function DashboardLayout() {
  const { isLoading, projects } = useOwnerProjects();

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <DashboardHeader /> <Stats projects={projects} />
    </div>
  );
}

export default DashboardLayout;
