import { Button, Modal, Result } from "antd";
import React from "react";

const ResponseModal = ({ open, setOpen, message, description }) => {
  return (
    <Modal
      open={open}
      onCancel={() => setOpen(!open)}
      centered
      footer={false}
      closable={false}
    >
      <Result
        status="success"
        title={message}
        subTitle={description}
        extra={[
          <Button
            type="primary"
            className="bg-[#0f4b93] px-14 flex items-center justify-center py-5 relative left-[50%] translate-x-[-50%]"
            onClick={() => window.location.reload()}
          >
            Done
          </Button>,
        ]}
      />
    </Modal>
  );
};

export default ResponseModal;
