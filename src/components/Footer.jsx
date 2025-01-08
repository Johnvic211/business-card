import twitterIcon from './../assets/twitter-Icon.png';
import facebookIcon from './../assets/facebook-Icon.png';
import instagramIcon from './../assets/instagram-Icon.png';
import githubIcon from './../assets/github-Icon.png';
import PropTypes from 'prop-types';

const Icon = ({ src, alt, link }) => {
  return (
    <a href={link} target='_blank'>
        <img src={src} alt={alt} className='social-media-icons' rel="noopener noreferrer" />
    </a>
  )
}

const socialLinks = [
    { src: twitterIcon, alt: 'Twitter Icon', link: 'https://x.com/JackSparroww08' },
    { src: facebookIcon, alt: 'Facebook Icon', link: 'https://www.facebook.com/JackdelaCruz08' },
    { src: instagramIcon, alt: 'Instagram Icon', link: 'https://www.instagram.com/jacksparroww09' },
    { src: githubIcon, alt: 'Github Icon', link: 'https://github.com/Johnvic211' },
];

function Footer() {
    return (
        <div className="bg-footer py-1 mt-8 flex justify-center items-center rounded-b-lg">
            {socialLinks.map((social, index) => (
                <Icon key={index} src={social.src} alt={social.alt} link={social.link} />
            ))}
        </div>
    )
}

Icon.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Footer