import { useState } from 'react';
import StarterPage from './components/StarterPage/StarterPage';
import QuestionPage from './components/QuestionsPage/QuestionPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import ErrorPage from './ErrorPage.tsx';
import About from './components/About/About.tsx';
import Authors from './components/Authors/Authors.tsx'
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [viewQuestions, setViewQuestions] = useState<boolean>(false);
  const [topic, setTopic] = useState<string>('');

  const pageContent = viewQuestions ? <QuestionPage topic={topic}/> : <StarterPage setTopic={setTopic} setViewQuestions={setViewQuestions}/>

  const content = (
    <div className='page-container'>
      <Header viewQuestions={viewQuestions} setViewQuestions={setViewQuestions}/>
      <Routes>
        <Route path="/" element={pageContent}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/about/:id" element={<Authors />}></Route>
      </Routes>
      <Footer />
    </div>
  )

  return content;
}

export default App
