import { ReactElement } from 'react';
import './TasksList.css';

type Topic = {
    topic: string;
    content: string;
    title?: string;
    type: string;
    vocabulary: string;
    questions: string;
    about: string
}

type PropsType = {
    pickedTopic: Topic
}

function TasksList({ pickedTopic }: PropsType) {
    const isVideo: boolean = pickedTopic.type === "video" ? true : false
    const img: string = new URL(`../../images/${pickedTopic.topic}-img.jpg`, import.meta.url).href;

    const pageContent: ReactElement = (
        <>
            <h2 className="tasks__header">{pickedTopic.topic.split('-').join(' ')}</h2>
            {!isVideo && <img src={img} alt={pickedTopic.topic} className='tasks__img'></img>}
            {pickedTopic.title && pickedTopic.title.split('\n').map((item, i) => {
                    return i == 1 ? (
                        <h3 key={i} className="tasks__subheader-light">{item}</h3>
                    ) : (
                        <h3 key={i} className="tasks__subheader">{item}</h3>
                    )    
            })}
            {isVideo 
                ? <iframe className="tasks__video" width="560" height="315" src="https://www.youtube.com/embed/gCfzeONu3Mo?si=yB9TOvA-PmyZXT0L" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share fullscreen"></iframe>
                : <div className="tasks__text-container">
                        {pickedTopic.content.split('\n').map((item, i) => <p key={i} className="tasks__text">{item}</p>)}
                    </div>
            }
            <h3 className="tasks__header tasks__subheader">Questions</h3>
            <div className="tasks__text-container">
                {pickedTopic.questions.split('\n').map((item, i) => <p key={i} className="tasks__text">{item}</p>)}
            </div>
        </>
        
    )
    const content = (
        <>
            {pageContent}
        </>
    )

    return content;
}

export default TasksList