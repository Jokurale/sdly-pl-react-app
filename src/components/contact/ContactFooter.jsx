import { ReactComponent as GithubLogo } from '../../svgs/github.svg'
import { ReactComponent as TwitterLogo } from '../../svgs/twitter.svg'
import { ReactComponent as LinkedInLogo } from '../../svgs/linkedin.svg'

import "./ContactFooter.scss"

export default function ContactFooter() {
    return (
        <div className="contact-footer">
                <div className="contact-social-item"> <GithubLogo/> </div>
                <div className="contact-social-item"> <TwitterLogo/> </div>
                <div className="contact-social-item"> <LinkedInLogo/> </div>
        </div>
    )
}