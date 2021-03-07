import { ReactComponent as GithubLogo } from '../../svgs/github.svg'
import { ReactComponent as LinkedInLogo } from '../../svgs/linkedin.svg'

import "./Footer.scss"

export default function Footer() {
    return (
        <div className="Contact__Footer">
                <div className="Contact__Footer--item"> <a href="https://github.com/Jokurale" target="_blank"><GithubLogo/></a> </div>
                <div className="Contact__Footer--item"> <a href="https://www.linkedin.com/in/michał-podsiadły-076119193/" target="_blank"><LinkedInLogo/></a> </div>
        </div>
    )
}