import { Tooltip } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type TopicList = {
  topic: string,
  checked: boolean
}

type PropsType = {
    topic: string,
    
    id: number,
    listOfTopics: TopicList[],
    setTopic: React.Dispatch<React.SetStateAction<string>>,
    isModalOpen: boolean,
    setListOfTopics: React.Dispatch<React.SetStateAction<TopicList[]>>
}

function Topic({ topic, id, listOfTopics, setTopic, isModalOpen, setListOfTopics }: PropsType) {
    const navigate = useNavigate();
    const cardRefs = useRef<HTMLElement[]>([]);
    const img: string = new URL(`../../images/topicsListImages/${topic}.jpg`, import.meta.url).href;
    const [isBroken, setIsBroken] = useState(false);
  
    useEffect(() => {
      if (!isModalOpen) {
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
          }, { threshold: 0.1 }); // Adjust the threshold as needed
      
          cardRefs.current.forEach((cardRef) => {
            
            observer.observe(cardRef);
          });
      
          return () => {
            observer.disconnect();
          };
      }
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const handleCardClick = () => {
      setTopic(topic);

      navigate('/questions');
    }

    const handleCheckClick = (event: React.MouseEvent) => {
      event?.stopPropagation();
      setIsBroken(true);

      setTimeout(() => {
        const updatedTopics = listOfTopics.map((item) => {
        const temp = item.topic.split(' ').join('-');

        console.log(topic)
          if (temp === topic) {
            return { ...item, checked: true };
          }
          return item;
        });

        setListOfTopics(updatedTopics);
        localStorage.setItem("topics", JSON.stringify(updatedTopics));
      }, 1000)
      
    }

    // const buttonClass = checked ? 'card__button card__button-checked' : 'card__button card__button';
    
    const content = (
        <li ref={(el) => {if (el) cardRefs.current[id] = el}} className={`card ${isBroken ? 'breakdown' : ''}`} onClick={handleCardClick}>
                <img src={img} alt={topic} className='card__img' />
                <p className='card__text'>{topic.split('-').join(' ')}</p>
                <Tooltip title="Mark the topic as 'discussed'." color="#876bb0" placement="right">
                      <button className='card__button' onClick={handleCheckClick} />
                </Tooltip>   
        </li>   
    )

    return content;
}

export default Topic