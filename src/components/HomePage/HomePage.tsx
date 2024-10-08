import { topics } from '../../data/topics.json'
import Topic from '../Topic/Topic';
import { updateLocalStore } from '../../utils/utility-functions';
import { useState, useEffect } from 'react';
import { TopicList } from '../../utils/types';

type PropsType = {
    setTopic: React.Dispatch<React.SetStateAction<string>>,
    isModalOpen: boolean
}

function HomePage({ setTopic, isModalOpen }: PropsType) {
    updateLocalStore(topics);
    const [scrollerHeight, setScrollerHeight] = useState(window.innerHeight > 750 ? '600px' : '450px');
    const [listOfTopics, setListOfTopics] = useState<TopicList>(JSON.parse(localStorage.getItem("topics") || '[{"topic": "none", "checked": false}]'))
    const uncheckedTopics = listOfTopics.filter(item => item.checked === false);
    
    useEffect(() => {
        const handleResize = () => {
            setScrollerHeight(window.innerHeight > 750 ? '600px' : '450px');
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const pageContent = (
        uncheckedTopics.map((item, i) => {
            const clippedTopic = item.topic.split(' ').join('-');
            
            return (
                <Topic 
                    key={`${clippedTopic}-${i}`}
                    topic={clippedTopic}
                    setTopic={setTopic}
                    listOfTopics={listOfTopics}
                    isModalOpen={isModalOpen}
                    setListOfTopics={setListOfTopics}
                />
            )
        })
    );

    const content = (
        <main className='main'>
            <h1 className='main__header'>What topic would you like to discuss today?</h1>
            {uncheckedTopics.length === 0 ? (
                    <p className='main__apology'>
                        You've covered all the topics we provided. We're working on adding new ones to discuss. Meanwhile you might check the discussed topics again.
                    </p>
                ) : (
                    <div className='scroller' style={{maxHeight: `${scrollerHeight}`}}>
                        <ul className='scroller__inner'>
                            {pageContent}
                        </ul>
                    </div>
                )
            }
        </main>
    )
    
    return content;
}

export default HomePage;
