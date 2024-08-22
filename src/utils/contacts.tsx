import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

type ContactsData = {
    id: string;
    name: string;
    text?: string | undefined;
    icon: JSX.Element | string;
    link?: string | undefined;
  }[]

const substack: string = new URL(`../images/substack.png`, import.meta.url).href;
  
export const contactsData: ContactsData = [
        {
                id: "tg",
                name: "mariia",
                icon: <FontAwesomeIcon icon={faPaperPlane} style={{fontSize: "20px", marginTop: "2.5px", color: "#24292f"}}/>,
                link: "https://t.me/MariaLaps"
        },
        {
                id: "gmail",
                name: "mariia",
                text: "mariaspiiish@gmail.com",
                icon: <FontAwesomeIcon icon={faEnvelope} style={{fontSize: "20px",  marginTop: "2.5px", color: "#24292f"}}/>,
        },
        {
                id: "substack",
                name: "aleksandra",
                icon: <img src={substack} alt="substack logo" style={{width: "35px"}}/>,
                link: "https://aleksandrawithks.substack.com"
        },
        {
                id: "instagram",
                name: "aleksandra",
                icon: <FontAwesomeIcon icon={faInstagram} style={{width: "28px", height: "28px", color: "#24292f"}}/>,
                link: "https://www.instagram.com/aleksandra_withks?igsh=NHducG9oeDkzZ2lt"
        }
]
  