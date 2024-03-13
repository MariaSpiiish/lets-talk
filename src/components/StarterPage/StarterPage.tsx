import './StarterPage.css';
import { topics } from '../../data/topics'; 
import Topic from '../Topic/Topic';

type PropsType = {
    setViewQuestions: React.Dispatch<React.SetStateAction<boolean>>,
    setTopic: React.Dispatch<React.SetStateAction<string>>
}

function StarterPage({ setViewQuestions, setTopic }: PropsType) {

    const pageContent = (
        topics.map((topic, i) => {
            const clippedTopic = topic.split(' ').join('-');
            
            return (
                <Topic key={i} topic={clippedTopic} setViewQuestions={setViewQuestions} setTopic={setTopic}/>
            )
        })
    );

    const content = (
        <main className='main'>
            <h1 className='main__header'>What topic would you like to discuss today?</h1>
            {pageContent}
        </main>
    )
    
    return content;
}

export default StarterPage;
