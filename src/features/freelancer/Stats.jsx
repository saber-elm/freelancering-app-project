import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = Number(
    acceptedProposals.reduce((acc, curr) => curr.price + acc, 0)
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
      <Stat
        color="primary"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        title="درخواست ها"
        value={numOfProposals}
      />
      <Stat
        color="green"
        icon={<HiCollection className="w-20 h-20" />}
        title="درخواست های تایید شده"
        value={acceptedProposals.length}
      />
      <Stat
        color="yellow"
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        title="جمع دریافتی درخواست های تایید شده"
        value={toPersianNumbersWithComma(balance)}
      />
    </div>
  );
}

export default Stats;
