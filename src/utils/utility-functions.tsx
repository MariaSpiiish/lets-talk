type TopicList = {
    topic: string,
    checked: boolean
}

export function updateLocalStore(topics: TopicList[]): void {
    console.log(topics)
    if (!localStorage.getItem("topics"))  {
        localStorage.setItem("topics", JSON.stringify(topics));
        console.log('fill the local storage')
    } else if (topics.length > (JSON.parse(localStorage.getItem("topics") || '[]')).length) {
        const temp: TopicList[] = JSON.parse(localStorage.getItem("topics") || '[]');

        topics.forEach(topic => {
            if (!temp.some(i => i.topic === topic.topic)) {
                temp.push(topic);
                console.log('temp2', temp)
            } 
        })

        localStorage.clear();
        localStorage.setItem("topics", JSON.stringify(temp));
    } else if (topics.length < (JSON.parse(localStorage.getItem("topics") || '[]')).length) {
        const temp: TopicList[] = JSON.parse(localStorage.getItem("topics") || '[]');
        const result: TopicList[] = JSON.parse(localStorage.getItem("topics") || '[]');
        
        temp.forEach((topic, i) => {
            if (!topics.some(i => i.topic === topic.topic)) {
                result.splice(i, 1);
            } 
        })

        localStorage.clear();
        localStorage.setItem("topics", JSON.stringify(result));
    }
}