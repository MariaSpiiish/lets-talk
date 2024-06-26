import { useState } from 'react';
import QuestionPage from './components/QuestionsPage/QuestionPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About.tsx';
import Authors from './components/Authors/Authors.tsx'
import {
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from './components/StarterPage/HomePage.tsx';
import ErrorPage from './ErrorPage.tsx';

function App() {
  const [topic, setTopic] = useState<string>('');
  console.log(topic)

  function Layout(): JSX.Element {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    )
  }

  const content = (
    <div className='page-container'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<HomePage setTopic={setTopic} />}></Route>
          <Route path="/questions" element={<QuestionPage topic={topic} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/about/:name" element={<Authors />}></Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )

  return content;
}

export default App
