import aboutmeCoffeeBreak from '../../svgs/aboutme-coffee-break.svg'

import "./AboutmeFooter.scss"

export default function AboutmeFooter() {
    return (
        <div className="aboutme-footer">
            <img src={aboutmeCoffeeBreak} alt="Let's sip a bit of coffee"/>
            Whoaa.. what a run. Coffee break!
        </div>
    )
}