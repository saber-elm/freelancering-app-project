import useToggleProjectStatus from "./useToggleProjectStatus";
import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";

function ToggleProjectStatus({ project }) {
  const enabled = project.status === "OPEN" ? true : false;

  const { toggleProjectStatus, isToggling } = useToggleProjectStatus();

  const toggleHandler = () => {
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus({ id: project._id, data: { status } });
  };

  return (
    <div className="w-24">
      {isToggling ? (
        <Loading height="20" width="50" />
      ) : (
        <Toggle
          label={
            project.status === "OPEN" ? (
              <span className="badge badge--success">باز</span>
            ) : (
              <span className="badge badge--danger">بسته</span>
            )
          }
          enabled={enabled}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
