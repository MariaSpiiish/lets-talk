import './HomePage.css';
import { topics } from '../../data/topics.json'
import Topic from '../Topic/Topic';
import { updateLocalStore } from '../../utils/utility-functions';

type PropsType = {
    setTopic: React.Dispatch<React.SetStateAction<string>>,
}

type TopicList = {
    topic: string,
    checked: boolean
}

function HomePage({ setTopic }: PropsType) {
    updateLocalStore(topics);

    const listOfTopics: TopicList[] = JSON.parse(localStorage.getItem("topics") || '[{"topic": "none", "checked": false}]');
  
    const pageContent = (
        listOfTopics.map((item, i) => {
            const clippedTopic = item.topic.split(' ').join('-');
            
            return (
                <Topic key={i} id={i} topic={clippedTopic} checked={item.checked} setTopic={setTopic} listOfTopics={listOfTopics}/>
            )
        })
    );

    const content = (
        <main className='main'>
            <h1 className='main__header'>What topic would you like to discuss today?</h1>
            <div className='scroller'>
                <ul className='scroller__inner'>
                    {pageContent}
                </ul>
            </div>
            
        </main>
    )
    
    return content;
}

export default HomePage;
