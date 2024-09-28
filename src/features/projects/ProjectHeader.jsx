import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";

function ProjectHeader() {
  const [isOpenProject, setIsOpenProject] = useState(false);
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="font-black text-secondary-700 text-xl">پروژه های شما</h1>
      <Modal
        title="افزودن پروژه جدید"
        isOpen={isOpenProject}
        onClose={() => setIsOpenProject(false)}
      >
        <CreateProjectForm onClose={() => setIsOpenProject(false)} />
      </Modal>
      <button
        className="btn btn--primary flex items-center gap-x-2"
        onClick={() => setIsOpenProject(true)}
      >
        <HiOutlinePlus />
        <span>افزودن پروژه جدید</span>
      </button>
    </div>
  );
}

export default ProjectHeader;
