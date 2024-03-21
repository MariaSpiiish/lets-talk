import './Topic.css';

type PropsType = {
    topic: string,
    id: number,
    setViewQuestions: React.Dispatch<React.SetStateAction<boolean>>,
    setTopic: React.Dispatch<React.SetStateAction<string>>
}

function Topic({ topic, id, setViewQuestions, setTopic }: PropsType) {
    const img: string = new URL(`../../images/${topic}.jpg`, import.meta.url).href;
    
    const content = (
        <li className='card' style={{}}>
                <img src={img} alt={topic} className='card__img'></img>
                <p className='card__text'>{topic.split('-').join(' ')}</p>
                <button className='card__button' onClick={() => {setViewQuestions(true); setTopic(topic)}}>✅</button>
        </li>   
    )

    return content;
}

export default Topic