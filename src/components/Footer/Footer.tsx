import { useNavigate } from 'react-router-dom';

function Footer() {
  const year: number = new Date().getFullYear();
  const navigate = useNavigate();

  const handleClickAbout = () => {
    navigate("/about")
  };

  const content = (
    <footer className="footer">
        <p className="footer__date">&copy; {year}</p>
        <nav className="footer__link-container">
          <button className="footer__button">
            <a href="https://github.com/MariaSpiiish" target="_blank" rel="noopener noreferrer" className="footer__link">
              GitHub
            </a>
          </button>
          <button className="footer__button" onClick={handleClickAbout}>About</button>
        </nav>
    </footer>
  )
  
  return content;
}

export default Footer