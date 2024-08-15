import { ReactElement } from 'react';
import { data } from '../../data/data.json';
import TasksList from '../TasksList/TasksList';

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
  topic: string
}

function QuestionPage({ topic }: PropsType) {
  
 
  const pickedTopic: Topic | undefined = data.find(item => item.topic == topic);
 

  const pageContent: ReactElement | ReactElement[] = (
    pickedTopic
      ? <TasksList pickedTopic={pickedTopic}/>
      : <p>There seems to be no questions for the topic you selected. Please pick another topic.</p>
  )

  const content = (
    <main className="main">
        {pageContent}
    </main>
)

  return content;
}

export default QuestionPage
