import { ReactComponent as GithubLogo } from '../../svgs/github.svg'
import { ReactComponent as TwitterLogo } from '../../svgs/twitter.svg'
import { ReactComponent as LinkedInLogo } from '../../svgs/linkedin.svg'

import "./Footer.scss"

export default function Footer() {
    return (
        <div className="Contact__Footer">
                <div className="Contact__Footer--item"> <GithubLogo/> </div>
                <div className="Contact__Footer--item"> <TwitterLogo/> </div>
                <div className="Contact__Footer--item"> <LinkedInLogo/> </div>
        </div>
    )
}