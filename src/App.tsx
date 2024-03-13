
import { useState } from 'react';
import StarterPage from './components/StarterPage/StarterPage';
import QuestionPage from './components/QuestionsPage/QuestionPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [viewQuestions, setViewQuestions] = useState<boolean>(false);
  const [topic, setTopic] = useState<string>('');

  const pageContent = viewQuestions ? <QuestionPage topic={topic}/> : <StarterPage setTopic={setTopic} setViewQuestions={setViewQuestions}/>

  const content = (
    <div className='page-container'>
      <Header viewQuestions={viewQuestions} setViewQuestions={setViewQuestions}/>
        {pageContent}
      <Footer />
    </div>
  )

  return content;
}

export default App
