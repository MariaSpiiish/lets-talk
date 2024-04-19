import { useEffect, useRef } from 'react';
import './Topic.css';
import { Link } from 'react-router-dom';

type TopicList = {
  topic: string,
  checked: boolean
}

type PropsType = {
    topic: string,
    checked: boolean,
    id: number,
    listOfTopics: TopicList[],
    setTopic: React.Dispatch<React.SetStateAction<string>>,
}

function Topic({ topic, checked, id, listOfTopics, setTopic }: PropsType) {
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

    const handleClick = () => {
      setTopic(topic);
      listOfTopics.forEach(item => {
        if (item.topic === topic) {
          item.checked = true
        }
      })
      console.log(listOfTopics)
      localStorage.setItem("topics", JSON.stringify(listOfTopics))
    }

    const img: string = new URL(`../../images/${topic}.jpg`, import.meta.url).href;
    const buttonClass: string = `card__button ${checked && 'card__button-checked'}`
    
    const content = (
        <li ref={(el) => {if (el) cardRefs.current[id] = el}} className='card'>
                <img src={img} alt={topic} className='card__img'></img>
                <p className='card__text'>{topic.split('-').join(' ')}</p>
                <Link to="/questions" className={buttonClass} onClick={handleClick}></Link>
        </li>   
    )

    return content;
}

export default Topic