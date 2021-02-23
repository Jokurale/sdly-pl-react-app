import react from 'react'

import { ReactComponent as GithubLogo } from '../../svgs/github.svg'
import { ReactComponent as TwitterLogo } from '../../svgs/twitter.svg'
import { ReactComponent as LinkedInLogo } from '../../svgs/linkedin.svg'

import "./FrontPageSocials.scss"

export default function FrontPageSocials(props) { 
    return (
        <div className="front-page-socials">
           <div className="social-item"><GithubLogo /></div>
           <div className="social-item"><TwitterLogo /></div>
           <div className="social-item"><LinkedInLogo /></div>
        </div>
    )
}            