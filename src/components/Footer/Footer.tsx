import './Footer.css';

function Footer() {
  const year: number = new Date().getFullYear();

  const handleClickGit = () => {
    window.location.href = 'https://github.com/MariaSpiiish';
  };

  const content = (
    <footer className="footer">
        <div className="footer__date">&copy; {year}</div>
        <div className="footer__link-container">
          <button className="footer__button" onClick={handleClickGit}>GitHub</button>
          <button className="footer__button">About</button>
        </div>
    </footer>
  )
  
  return content;
}

export default Footer