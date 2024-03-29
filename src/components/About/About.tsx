import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css';

function About() {
    const imgM: string = new URL(`../../images/mariia.jpg`, import.meta.url).href;
    const imgA: string = new URL(`../../images/aleksandra.jpg`, import.meta.url).href;

    const pageContent = (
        <div className="about">
            <div className="about_img-wrapper">
                <img src={imgM} alt="meet mariia" className="about_img" style={{marginTop: '-50px'}}/>
            </div>
            <div className="about_img-wrapper">
                <img src={imgA} alt="meet aleksandra" className="about_img"/>
            </div>
                
        </div>
    )

    const content = (
        <>
            <Header viewQuestions={false}/>
            <main className='main'>
                {pageContent}
            </main>
            <Footer />
        </>
        
    )
    return content;
}

export default About