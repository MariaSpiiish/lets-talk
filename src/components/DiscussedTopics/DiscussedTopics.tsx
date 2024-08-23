import { TopicList } from "../../utils/types"
import { Collapse, CollapseProps, ConfigProvider } from "antd";
import { data } from '../../data/data.json';
import { Link } from "react-router-dom";

type PropsType = {
  setTopic: React.Dispatch<React.SetStateAction<string>>
}

function DiscussedTopics({ setTopic }: PropsType) {
  const listOfTopics: TopicList = JSON.parse(localStorage.getItem("topics") || '[{"topic": "none", "checked": false}]');
  const items: CollapseProps['items'] = [];
  const isNone:boolean = listOfTopics.find(item => item.topic === "none") !== undefined ? true : false;
  
  let isAnyChecked = false;

  !isNone && listOfTopics.forEach((item, i) => {
    if(item.checked === true) {
      isAnyChecked = true;

      const itemQuestions = data.find(topic =>  topic.topic === item.topic.split(' ').join('-'));

      if (itemQuestions) {
        items.push({
          key: String(i),
          label: item.topic,
          children: (
            <>
              {itemQuestions.questions.split('\n').map((q, i) => (
                  <p key={i} className="discussed__question">{q}</p>
              ))}  
              <Link to="/questions" className="discussed__link" onClick={() => setTopic(item.topic.split(' ').join('-'))}>View the topic page.</Link>
            </>
          ) 
        }) 
      }
    } 
  })

  return (
    <main className="discussed">
        {isNone || !isAnyChecked ? (
          <p className="discussed__apology">
            You haven't discussed any topics, yet. Go back to the Home Page.
          </p>
        ) : (
          <ConfigProvider
            theme={{
              components: {
                Collapse: {
                  contentBg: '#cbe3fb ',
                  fontSize: 16,
                  colorBorder: '#cbe3fb'
                }
              }
            }}
          >
            <Collapse items={items} accordion />
          </ConfigProvider>
          
        )}
    </main>
  )
}

export default DiscussedTopics