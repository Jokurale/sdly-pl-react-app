import { ReactComponent as GithubLogo } from '../../svgs/github.svg'
import { ReactComponent as TwitterLogo } from '../../svgs/twitter.svg'
import { ReactComponent as LinkedInLogo } from '../../svgs/linkedin.svg'

import "./Socials.scss"

export default function Socials(props) { 
    return (
        <div className="Frontpage__Socials">
           <div className="Frontpage__Socials--item"><GithubLogo /></div>
           <div className="Frontpage__Socials--item"><TwitterLogo /></div>
           <div className="Frontpage__Socials--item"><LinkedInLogo /></div>
        </div>
    )
}            