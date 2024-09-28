import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "./Stat";

function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map((p) => p.status === 2).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
      <Stat
        color="primary"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        title="پروژه ها"
        value={numOfProjects}
      />
      <Stat
        color="green"
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        title="پروژه های واگذار شده"
        value={numOfAcceptedProjects}
      />
      <Stat
        color="yellow"
        icon={<HiCollection className="w-20 h-20" />}
        title="درخواست ها"
        value={numOfProposals}
      />
      {/* <div className="col-span-1 grid grid-rows-2 grid-cols-[6.4rem_1fr] bg-secondary-0 p-4 rounded-lg gap-x-4">
        <div className="row-span-2 flex items-center justify-center p-2 aspect-square rounded-full bg-primary-100 text-primary-700">
          <HiOutlineViewGrid className="w-20 h-20" />
        </div>
        <h5 className="font-bold text-secondary-500 text-lg self-center">
          پروژه ها
        </h5>
        <p className="text-3xl font-bold text-secondary-900">{numOfProjects}</p>
      </div> */}
    </div>
  );
}

export default Stats;
