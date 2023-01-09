import "./Contact.scss"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

export default function Contact() {
    return (
        <div className="contact">
            <a className="contact__email" href="mailto:marcelovitalbarsil92@gmail.com" title="email me">
                <MailOutlineIcon className="contact__icon" /></a>
            <div className="contact-group">
                <a href="https://www.linkedin.com/in/marcelo-vital-brasil/" title="go to my linkedin">
                    <LinkedInIcon className="contact__icon" /></a>
                <a href="https://github.com/MarceloVBrasil" title="go to my github">
                    <GitHubIcon className="contact__icon" /></a>
                <a href="https://marcelobrasil.ca/" title="go to my website">
                    <LanguageIcon className="contact__icon" /></a>
            </div>
        </div>
    )
}
