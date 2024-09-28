import { HiCollection, HiOutlineViewGrid, HiUser } from "react-icons/hi";
import Stat from "../../ui/Stat";

function Stats({ proposals, projects, users }) {
  const numOfProposals = proposals.length;
  const numOfProjects = projects.length;
  const numOfUsers = users.length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
      <Stat
        color="yellow"
        icon={<HiUser className="w-20 h-20" />}
        title="کاربران"
        value={numOfUsers}
      />
      <Stat
        color="primary"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        title="درخواست ها"
        value={numOfProposals}
      />
      <Stat
        color="green"
        icon={<HiCollection className="w-20 h-20" />}
        title="پروژه ها"
        value={numOfProjects}
      />
    </div>
  );
}

export default Stats;
