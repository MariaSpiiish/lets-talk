import './TaskList.css';

type Topic = {
    topic: string;
    content: string;
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

    const content = (
        <div className="tasks-container">
            <h2>{pickedTopic.topic}</h2>
            <li>{isVideo 
                ? <p>To make the most of the topic follow the link below.{pickedTopic.about}</p>
                : pickedTopic.content.split('\n').map((item, i) => <p key={i} className="tasks__text">{item}</p>)}
            </li>
            <li>
                {pickedTopic.questions.split('\n').map((item, i) => <p key={i} className="tasks__text">{item}</p>)}
            </li>
            
        </div>
    )

    return content;
}

export default TasksList