import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import {FiTwitter} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
        <div className='container footer__container'>
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt="Footer Logo"/>
                </Link>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent leo augue, pulvinar ut tincidunt a, pellentesque sed ante. Vestibulum efficitur vehicula lorem et mattis.
                </p>
                <div className='footer__socials'>
                    <a href='https://twitter.com/' target="_blank" rel="noreferrer noopener"><FiTwitter/></a>
                    <a href='https://instagram.com/' target="_blank" rel="noreferrer noopener"><FiInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/roadmap">Roadmap</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className='footer__copyright'>
            <small>
                2022 NFT for ASD &copy; All Rights Reserved
            </small>
        </div>
    </footer>
  )
}

export default Footer