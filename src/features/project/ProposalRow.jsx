import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import Modal from "../../ui/Modal";
import { useState } from "react";
import ChangeProposalStatus from "./ChangeProposalStatus";

// function renderSwitch(params) {
//   switch (params) {
//     case 0:
//       return <span className="badge badge--danger">رد شده</span>;
//     case 1:
//       return <span className="badge badge--secondary">در انتظار تایید</span>;
//     case 2:
//       return <span className="badge badge--success">تایید شده</span>;
//   }
// }

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function ProposalRow({ proposal, index }) {
  const { status, user } = proposal;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{truncateText(proposal.description, 20)}</td>
      <td>{proposal.duration} روز</td>
      <td>{proposal.price}</td>
      {/* <td>{renderSwitch(status)}</td> */}
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="تغییر وضعیت درخواست"
        >
          <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>تغییر وضعیت</button>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
