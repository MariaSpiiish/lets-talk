import { BulbFilled } from "@ant-design/icons";
import { Modal } from "antd";

type PropsType = {
    isModalOpen: boolean,
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function TipsPopup({ isModalOpen, setIsModalOpen }: PropsType) {
    const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };

  return (
    <Modal 
        title="Tips"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        className='popup'
      >
        <p className="popup__p"><BulbFilled style={{color: "#cd51c3"}}/> Find a buddy who is as eager to practice English as you are.</p>
        <p className="popup__p"><BulbFilled style={{color: "#217d77"}}/> Pick a topic of interest from the list.</p>
        <p className="popup__p"><BulbFilled style={{color: "#d08058"}}/> When you get to the topic page, you will first see a video or an article you might want to watch or read. It is there to stimulate the discussion if you'd like.</p>
        <p className="popup__p"><BulbFilled style={{color: "#bea2e7"}}/> Not willing to read or watch anything? <span>Just scroll down straight to the questions!</span></p>
    </Modal>
  )
}

export default TipsPopup;
