
import { Link } from 'react-router-dom';

function About() {
    const imgM: string = new URL(`../../images/about/mariia.jpg`, import.meta.url).href;
    const imgA: string = new URL(`../../images/about/aleksandra.jpg`, import.meta.url).href;

    const textM = "Teacher  -  Traveller  -  WebDev  -  Mariia  -  ";
    const textA = "W riter  -  Reader  -  Teacher  -  Aleksandra  -  ";

    const pageContent = (
        <nav className="about">
            <div className="about_circle">
                <Link to="/about/mariia" className="about_img-wrapper">
                    <img src={imgM} alt="meet mariia" className="about_img" style={{marginTop: '-50px'}}/>
                </Link>
                <div className="about_text-cont about_text-cont-m">
                    <p className="about_text">{textM.split('').map((char, i) => (
                        <span key={i} style={{transform: `rotate(${i * 7.5}deg)`}}>{char}</span>
                    ))}</p>
                </div>
            </div>
            
            <div className="about_circle">
                <Link to="/about/aleksandra" className="about_img-wrapper">
                    <img src={imgA} alt="meet aleksandra" className="about_img"/>
                </Link>
                <div className="about_text-cont about_text-cont-a">
                    <p className="about_text">{textA.split('').map((char, i) => (
                        <span key={i} style={{transform: `rotate(${i * 7.3}deg)`}}>{char}</span>
                    ))}</p>
                </div>
            </div>
            
                
        </nav>
    )

    const content = (
        
            <main className='main'>
                {pageContent}
            </main>
           
        
    )
    return content;
}

export default About