import { Link, useLocation } from 'react-router-dom'

type PropsType = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Header({ setIsModalOpen } : PropsType) {
  const location = useLocation();
 
  const img: string = new URL(`../../images/logo.png`, import.meta.url).href;

  let topicButtonText: string = 'Pick a topic';

  if (location.pathname === "/questions") {
    topicButtonText = "Pick another topic";
  } 

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsModalOpen(true);
  }

  const pageContent = (
    location.pathname !== "/"
    ? <Link to="/" className='header__button header__button-nav'>{topicButtonText}</Link>
    : <Link to="/discussed" className='header__button header__button-nav'>Discussed Topics</Link>
  )

  const content = (
    <header className='header'>
      <div className='header__container'>
        <Link to="/">
          <img src={img} alt={"let's talk logo"} className='header__logo' />
        </Link>
        <button className='header__button header__button-popup' onClick={(e) => handleClick(e)} type="button">Tips</button>
      </div>
      
      {pageContent}
    </header>
  )
  return content;
}

export default Header