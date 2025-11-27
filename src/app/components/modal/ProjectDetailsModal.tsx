import React, { ReactNode, useState } from "react";
import { Button, Modal } from "antd";
import Image from "next/image";
import MagicButtonSmall from "../ui/MagicButtonSmall";
import { FaGithub } from "react-icons/fa";

const ProjectDetailsModal = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {children}
      </Button>
      <Modal
        title="🏀 Sportify"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        className="projectModal"
        maskStyle={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          transition: "all 0.4s ease",
        }}
        okText="Live Demo"
        onCancel={handleCancel}>
        <div>
          <div>
            <Image
              className="w-full rounded-[10px] hover:scale-105 duration-300 my-5"
              src={
                "https://res.cloudinary.com/dyvgvtnld/image/upload/v1729712309/m7sb4favegg0apdwj2xd.png"
              }
              width={1000}
              height={1000}
              alt={"title"}
            />
            <div className="absolute bg-black/15 inset-0 "></div>
          </div>

          <p className="text-black-100/60">
            Sportify is a comprehensive e-commerce platform offering various
            sporting equipment and accessories. This front-end application is
            built using React and provides a seamless and user-friendly
            interface for customers to browse, filter, and purchase products.
          </p>

          <div className="flex justify-end mt-4">
            <MagicButtonSmall
              target="_blank"
              icon={<FaGithub size={18} />}
              iconPosition="left"
              link={""}>
              Github
            </MagicButtonSmall>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectDetailsModal;
