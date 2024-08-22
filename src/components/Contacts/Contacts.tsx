import { Typography, Tooltip } from "antd";
import { contactsData } from "../../utils/contacts";

const { Text } = Typography;
const text = (text: string) => <Text copyable>{text}</Text>;

type PropsType = {
  name: string
}



function Contacts({ name }: PropsType) {
  const listItem = contactsData.filter(item => item.name === name).map((item, i) => {
    if (item.id === "gmail")
      return (
      <li key={i} className="contacts__list-item">
        <a className="contacts__link" href={item.link} target="_blank" rel="noopener noreferrer">
          <Tooltip title={text(item.text as string)} color="#f3f3f3" placement="right">
            {item.icon}
          </Tooltip>
        </a>
      </li>
    )
    else
      return (
        <li key={i} className="contacts__list-item">
          <a className="contacts__link" href={item.link} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        </li>
      )
  });
  
  return (
    <section className="contacts" id="contacts">
      <ul className="contacts__list">
        {listItem}
      </ul>
    </section>
  )
}

export default Contacts;