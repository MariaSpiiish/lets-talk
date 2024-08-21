import { ReactElement, useState } from 'react';
import { Topic } from '../../utils/types';

type PropsType = {
    pickedTopic: Topic
}

function TasksList({ pickedTopic }: PropsType) {
    const [isLoading, setIsLoading] = useState(true);
    const isVideo: boolean = pickedTopic.type === "video" ? true : false
    const img: string = new URL(`../../images/textImages/${pickedTopic.topic}-img.jpg`, import.meta.url).href;
    const thumbnail: string = new URL(`../../images/loading.jpg`, import.meta.url).href;

    const pageContent: ReactElement = (
        <>
            <h2 className="tasks__header">{pickedTopic.topic.split('-').join(' ')}</h2>
            {(!isVideo && !img.includes('undefined')) && <img src={img} alt={pickedTopic.topic} className='tasks__img'></img>}
            {pickedTopic.title && pickedTopic.title.split('\n').map((item, i) => {
                    return i == 1 ? (
                        <h3 key={i} className="tasks__subheader-light">{item}</h3>
                    ) : (
                        <h3 key={i} className="tasks__subheader">{item}</h3>
                    )    
            })}

            {isVideo 
                ? <>
                    {isLoading && <img src={thumbnail} alt="Video Thumbnail" className="video-placeholder" />}
                    <iframe 
                        className="tasks__video"
                        width="560"
                        height="315"
                        src={pickedTopic.content}
                        title="YouTube video player"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                        onLoad={() => setIsLoading(false)}
                        style={{ display: isLoading ? 'none' : 'block' }}
                    />
                    <div className="tasks__text-container">
                        {pickedTopic.about && pickedTopic.about.split('\n').map((item, i) => 
                            <p key={i} className="tasks__text">
                                {item}
                            </p>
                        )}
                    </div>
                    
                </>
                
                : <div className="tasks__text-container">
                        {pickedTopic.content.split('\n').map((item, i) => 
                            <p key={i} className="tasks__text">
                                {item.includes('<b>') ? <b>{item.replace(/<b>|<\/b>/gm, '')}</b> : <span>{item}</span>}
                            </p>  
                        )}
                        {(!isVideo && pickedTopic.about) && (
                            <a
                                href={pickedTopic.about}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="tasks__text-link"
                            >
                                You can read the rest of the article following this link to Aleksandra's Substack page
                            </a>
                        )}
                </div>
            }

            <h3 className="tasks__header tasks__subheader">Questions</h3>
            <div className="tasks__text-container">
                {pickedTopic.questions.split('\n').map((item, i) => 
                    <p key={i} className="tasks__text">
                        {item}
                    </p>
                )}
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