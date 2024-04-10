import './HomePage.css';
import { topics } from '../../data/topics'; 
import Topic from '../Topic/Topic';

type PropsType = {
    setTopic: React.Dispatch<React.SetStateAction<string>>
}

function HomePage({ setTopic }: PropsType) {
    const pageContent = (
        topics.map((topic, i) => {
            const clippedTopic = topic.split(' ').join('-');
            
            return (
                <Topic key={i} id={i} topic={clippedTopic} setTopic={setTopic}/>
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