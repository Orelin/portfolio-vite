import './Project.scss';
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io5';
function Project() {
    return (
        <section className="Project">
            <div>
                <p className="Project-p-title" id="Projects">
                    {' '}
                    Projects{' '}
                </p>
            </div>
            <p className="Project-carrousel-title">Expense Calculator</p>
            <div className="Project-container">
                <div className="Project-carrousel">
                    <div className="Project-carrousel-container">
                        <img
                            className="Project-carrousel-img"
                            src="https://drive.google.com/uc?export=download&id=1Xy6hjORS2xdzKtLRJSpfeopnZbRoby64"
                            alt="Imagen 1"
                        />
                        <img
                            className="Project-carrousel-img"
                            src="https://drive.google.com/uc?export=download&id=14nMh2qSnxLGTec-y1EgFjwGiDwzayNXJ"
                            alt="Imagen 2"
                        />
                    </div>
                    <div className="Project-carrousel-text">
                        <p className="Project-carrousel-description">- Allows you to add monthly income and expenses.</p>
                        <p className="Project-carrousel-description">- Provides an annual summary on the screen.</p>
                        <p className="Project-carrousel-description">- Includes a currency converter.</p>
                        <p className="Project-carrousel-description">- Skills:</p>
                        <div className="Project-carrousel-icons">
                            <IoLogoHtml5 className="Project-carrousel-icon" style={{ color: 'red' }} />
                            <IoLogoCss3 className="Project-carrousel-icon" style={{ color: 'blue' }} />
                            <IoLogoJavascript className="Project-carrousel-icon" style={{ color: 'yellow' }} />
                            
                        </div>
                        <a className="Project-carrousel-link" href="https://calcgasto.netlify.app/" target='_blank'>Open Project here!</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;
