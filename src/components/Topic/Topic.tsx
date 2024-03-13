import './Topic.css';

type PropsType = {
    topic: string,
    setViewQuestions: React.Dispatch<React.SetStateAction<boolean>>,
    setTopic: React.Dispatch<React.SetStateAction<string>>
}

function Topic({ topic, setViewQuestions, setTopic }: PropsType) {
    const img: string = new URL(`../../images/${topic}.jpg`, import.meta.url).href;
    
    const content = (
        <div className='scroller'>
            <div className='scroller__inner'>
                <div className='card'>
                        <img src={img} alt={topic} className='card__img'></img>
                        <p className='card__text'>{topic.split('-').join(' ')}</p>
                        <button className='card__button' onClick={() => {setViewQuestions(true); setTopic(topic)}}>✅</button>
                </div>
                
            </div>
        </div>
    )

    return content;
}

export default Topic