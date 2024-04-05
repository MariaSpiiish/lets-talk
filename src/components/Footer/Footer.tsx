import { useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const year: number = new Date().getFullYear();
  const navigate = useNavigate();

  const handleClickGit = () => {
    window.location.href = 'https://github.com/MariaSpiiish';
  };

  const handleClickAbout = () => {
    navigate("/about")
  };

  const content = (
    <footer className="footer">
        <p className="footer__date">&copy; {year}</p>
        <nav className="footer__link-container">
          <button className="footer__button" onClick={handleClickGit}>GitHub</button>
          <button className="footer__button" onClick={handleClickAbout}>About</button>
        </nav>
    </footer>
  )
  
  return content;
}

export default Footer