import { Tooltip } from 'antd';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

type TopicList = {
  topic: string,
  checked: boolean
}

type PropsType = {
    topic: string,
    listOfTopics: TopicList[],
    setTopic: React.Dispatch<React.SetStateAction<string>>,
    isModalOpen: boolean,
    setListOfTopics: React.Dispatch<React.SetStateAction<TopicList[]>>
}

gsap.registerPlugin(useGSAP);

function Topic({ topic, listOfTopics, setTopic, isModalOpen, setListOfTopics }: PropsType) {
    const navigate = useNavigate();
    const cardRef = useRef<HTMLLIElement | null>(null); // For single card reference
    const { contextSafe } = useGSAP({ scope: cardRef });

    const img: string = new URL(`../../images/topicsListImages/${topic}.jpg`, import.meta.url).href;

    useEffect(() => {
        if (!isModalOpen && cardRef.current) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in');
                        entry.target.classList.remove('out');
                    } else {
                        entry.target.classList.remove('in');
                        entry.target.classList.add('out');
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(cardRef.current);

            return () => observer.disconnect();
        }
    }, [isModalOpen]);

    const handleCardClick = () => {
        setTopic(topic);
        navigate('/questions');
    }

    const handleCheckClick = contextSafe((event: React.MouseEvent) => {
        event.stopPropagation();
        cardRef.current?.classList.add('bla')
        console.log(cardRef.current)
        // Use GSAP to animate the breakdown
        gsap.to('.card', { y: -260, x: 200, opacity: 0, ease: "power2.inOut", duration: 1, onComplete: () => {
            const updatedTopics = listOfTopics.map((item) => {
                const temp = item.topic.split(' ').join('-');
                if (temp === topic) {
                    return { ...item, checked: true };
                }
                return item;
            });

            setListOfTopics(updatedTopics);
            localStorage.setItem("topics", JSON.stringify(updatedTopics));
        }});
    })

    return (
        <li ref={cardRef} className='card-container' onClick={handleCardClick}>
            <div className='card'>
                <img src={img} alt={topic} className='card__img' />
                <p className='card__text'>{topic.split('-').join(' ')}</p>
                <Tooltip title="Mark the topic as 'discussed'." color="#876bb0" placement="right">
                    <button className='card__button' onClick={handleCheckClick} />
                </Tooltip>   
            </div>
        </li>   
    );
}

export default Topic;
