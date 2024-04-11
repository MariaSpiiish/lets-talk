import { Link, useLocation } from 'react-router-dom'
import './Header.css'

// type PropsType = {
//   viewQuestions: boolean
//   setViewQuestions: React.Dispatch<React.SetStateAction<boolean>>
// }

function Header() {
  const location = useLocation();
 
  const img: string = new URL(`../../images/logo.png`, import.meta.url).href;

  let topicButtonText: string = 'Pick a topic';

  if (location.pathname === "/questions") {
    topicButtonText = "Pick another topic";
  } 

  const pageContent = (
    location.pathname !== "/"
    ? <Link to="/" className='header__button header__button-nav'>{topicButtonText}</Link>
    : <></>
  )

  const content = (
    <header className='header'>
      <div className='header__container'>
        <img src={img} alt={"let's talk logo"} className='header__logo'></img>
        <button className='header__button header__button-popup'>Tips</button>
      </div>
      
      {pageContent}
    </header>
  )
  return content;
}

export default Header