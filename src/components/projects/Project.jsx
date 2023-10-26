import './Project.scss';
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io5';
import { SiExpo, SiReact } from "react-icons/si";

function Project() {
    return (
        <section className="Project">
            <div>
                <p className="Project-p-title" id="Projects">
                    Projects
                </p>
            </div>
            <p className="Project-carrousel-title">Expense Calculator</p>
            <div className="Project-container">
                <div className="Project-carrousel">
                    <div className="Project-carrousel-container">
                        <img
                            className="Project-carrousel-img"
                            src="https://drive.google.com/uc?export=download&id=1Xy6hjORS2xdzKtLRJSpfeopnZbRoby64"
                            alt="Project 1 Imagen 1"
                        />
                        <img
                            className="Project-carrousel-img"
                            src="https://drive.google.com/uc?export=download&id=14nMh2qSnxLGTec-y1EgFjwGiDwzayNXJ"
                            alt="Project 1 Imagen 2"
                        />
                    </div>
                    <div className="Project-carrousel-text">
                        <p className="Project-carrousel-description">- Allows you to add monthly income and expenses.</p>
                        <p className="Project-carrousel-description">- Provides an annual summary on the screen.</p>
                        <p className="Project-carrousel-description">- Includes a currency converter.</p>
                        <p className="Project-carrousel-description">- Skills:</p>
                        <div className="Project-carrousel-icons">
                            <IoLogoHtml5      className="Project-carrousel-icon" alt="Logo html"       style={{ color: 'red' }} />
                            <IoLogoCss3       className="Project-carrousel-icon" alt="Logo Css"        style={{ color: 'blue' }} />
                            <IoLogoJavascript className="Project-carrousel-icon" alt="Logo JavaScript" style={{ color: 'yellow' }} />
                            
                        </div>
                        <a className="Project-carrousel-link" href="https://calcgasto.netlify.app/" target='_blank'>Open Project here!</a>
                    </div>
                </div>
            </div>

            <p className="Project-carrousel-title">Unfollowers Instagram Apk</p>
            <div className="Project-container">
                <div className="Project-carrousel">
                    <div className="Project-carrousel-container">
                        <img
                            className="Project-carrousel-img"
                            src="https://drive.google.com/uc?export=download&id=1431nMoMoytL6nDkp3hgMlnhwO-FyERyX"
                            alt="Project 2 Imagen 1"
                        />
                        <img
                            className="Project-carrousel-img"
                            src="https://drive.google.com/uc?export=download&id=142_a1lpIRaC6899I1wurIWjydWPcPsV5"
                            alt="Project 2 Imagen 2"
                        />
                    </div>
                    <div className="Project-carrousel-text">
                    <p className="Project-carrousel-description">- List of users who have unfollowed you on Instagram.</p>
                    <p className="Project-carrousel-description">- Easily unfollow users from the provided list.</p>
                    <p className="Project-carrousel-description">- User-friendly interface for effortless navigation.</p>
                        <p className="Project-carrousel-description">- Skills:</p>
                        <div className="Project-carrousel-icons">
                            <SiExpo   className="Project-carrousel-icon" alt="Logo expo"/>
                            <SiReact  className="Project-carrousel-icon" alt="Logo react Native" style={{ color: 'skyblue' }}/>
                        </div>
                        <a className="Project-carrousel-link" href="#Projects">Coming Soon on Play Store</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;
