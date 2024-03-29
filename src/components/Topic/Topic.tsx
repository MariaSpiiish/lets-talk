import { useEffect, useRef } from 'react';
import './Topic.css';

type PropsType = {
    topic: string,
    id: number,
    setViewQuestions: React.Dispatch<React.SetStateAction<boolean>>,
    setTopic: React.Dispatch<React.SetStateAction<string>>
}

function Topic({ topic, id, setViewQuestions, setTopic }: PropsType) {
    const cardRefs = useRef<HTMLElement[]>([]);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            entry.target.classList.remove('out'); // Apply your animation class here
          } else {
            entry.target.classList.remove('in');
            entry.target.classList.add('out');
          }
        });
      }, { threshold: 0.7 }); // Adjust the threshold as needed
  
      cardRefs.current.forEach((cardRef) => {
        
        observer.observe(cardRef);
      });
  
      return () => {
        observer.disconnect();
      };
    }, []);

    const img: string = new URL(`../../images/${topic}.jpg`, import.meta.url).href;
    
    const content = (
        <li ref={(el) => cardRefs.current[id] = el} className='card'>
                <img src={img} alt={topic} className='card__img'></img>
                <p className='card__text'>{topic.split('-').join(' ')}</p>
                <button className='card__button' onClick={() => {setViewQuestions(true); setTopic(topic)}}>✅</button>
        </li>   
    )

    return content;
}

export default Topic