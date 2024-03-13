import './Header.css'

type PropsType = {
  viewQuestions: boolean
  setViewQuestions: React.Dispatch<React.SetStateAction<boolean>>
}

function Header({ viewQuestions, setViewQuestions }: PropsType) {
  const img: string = new URL(`../../images/logo.png`, import.meta.url).href;
  const pageContent = viewQuestions ? <button className='header__button header__button-nav' onClick={() => setViewQuestions(false)}>Pick another topic</button> : <></>

  const content = (
    <div className='header'>
      <div className='header__container'>
        <img src={img} alt={"let's talk logo"} className='header__logo'></img>
        <button className='header__button header__button-popup'>Tips</button>
      </div>
      
      {pageContent}
    </div>
  )
  return content;
}

export default Header