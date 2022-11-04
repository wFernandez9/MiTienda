import FacebookIcon from '../Icons/FacebookIcon/FacebookIcon'
import GithubIcon from '../Icons/GithubIcon/GithubIcon'
import InstagramIcon from '../Icons/InstagramIcon/InstagramIcon'
import LinkedinIcon from '../Icons/LinkedinIcon/LinkedinIcon'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className="footer container-fluid mt-5 bg-dark">

                <div className="row mb-3">
                    <div className="col-12 text-center text-white">
                        <h3 className="footer__texto">Nuestras <b>Redes:</b></h3>
                        <div className="redes__sociales">
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FacebookIcon /></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer"> <InstagramIcon /> </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"> <LinkedinIcon /> </a>
                            <a href="https://github.com/" target="_blank" rel="noreferrer"> <GithubIcon /> </a>
                        </div>
                    </div>
                </div>
                <div className="footer-final row text-center">
                    <h4 className="text-white">Copyright © 2022</h4>
                </div>
            </footer>
        </>
    )
}

export default Footer