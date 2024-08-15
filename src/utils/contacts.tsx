import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faEnvelope } from "@fortawesome/free-regular-svg-icons";

type ContactsData = {
    id: string,
    text?: string | undefined;
    icon: JSX.Element | string;
    link?: string | undefined;
  }[]
  
  export const contactsData: ContactsData = [
    {
            id: "tg",
            icon: <FontAwesomeIcon icon={faPaperPlane} style={{fontSize: "20px", marginTop: "2.5px", color: "#24292f"}}/>,
            link: "https://t.me/MariaLaps"
    },
    {
            id: "gmail",
            text: "mariaspiiish@gmail.com",
            icon: <FontAwesomeIcon icon={faEnvelope} style={{fontSize: "20px",  marginTop: "2.5px", color: "#24292f"}}/>,
    },
  ]
  