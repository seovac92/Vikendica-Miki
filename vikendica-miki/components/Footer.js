import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return ( 
        <footer>
            <main>
                <div className="footer-main-wrapper">
                    <article>
                        <p className='footer-title'>Викендица Мики</p>
                        <Image priority src="/logo.svg" alt='logo-vikendica miki' width={300} height={140} />
                    </article>
                    <article className="footer-contact">
                        <ul className='contact-list'>
                            <li>Контакт :</li>
                            <li><a className='mobile' href="tel:+381669421538">066/942-15-38</a></li>
                            <li><a className='mail' href="mailto:milantadicbb@gmail.com">milantadicbb@gmail</a></li>
                        </ul>
                        <div className="footer-social-network">
                            <a href="https://www.facebook.com/vikendicamiki" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faFacebook} /></a>
                            <a href="https://www.instagram.com/vikendicamiki/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
                        </div>
                    </article>
                </div>
            </main>
            <aside className='copyright-wrapper'>
                <p className='copyright'>Викендица Мики &copy; 2022 </p>
            </aside>
        </footer>
     );
}
 
export default Footer;