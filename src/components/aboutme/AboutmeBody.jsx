import ActionManager from "../../js/ActionManager"
import AboutmeCard from "./AboutmeCard"
import AboutmeFooter from "./AboutmeFooter"

import aboutmeDev from '../../svgs/aboutme-dev.svg'

import "./AboutmeBody.scss"

export default function AboutmeBody() {
    return (
        <div className="aboutme-cards">
            <div className="aboutme-story">
                <p className="aboutme-item">
                    Young programming enthusiast. Now studying at in Lublin.
                </p>

                <p className="aboutme-item">
                    Half a year of commercial experience
                </p>

                <p className="aboutme-item">
                    Started as a backend php-based junior, now heading towards cloud-based servieces
                </p>

                <p className="aboutme-item">
                    Node.js based solutions, using mostly express
                </p>

                <p className="aboutme-item">
                    First touches with react.js
                </p>

                <p className="aboutme-item">
                    GCP for cloud-solutions
                </p>

                <p className="aboutme-item">
                    Feels comfortable on frontend as well as on backend
                </p>

                <p className="aboutme-item">
                    Clean-code and dry priciples on each step
                </p>
            </div>

            <AboutmeCard image={aboutmeDev} />

            <div className="aboutme-story">
                <p className="aboutme-item">
                    Well-known: PHP, Python and JS
                </p>

                <p className="aboutme-item">
                    Friendly, sociable and creative person
                </p>

                <p className="aboutme-item">
                    Pre-touching and designing apps in Adobe XD and Figma
                </p>

                <p className="aboutme-item" >
                    Doing some minor svg-like jobs in adobe's stack (Illustrator, Photoshop)
                </p>

                <p className="aboutme-item">
                    Each project is being versioned using git and github
                </p>

                <p className="aboutme-item">
                    Simplicicty equals quality
                </p>

                <p className="aboutme-item">
                    Ease learning curve.
                </p>

                <p className="aboutme-item">
                    Open-minded. <b>Currently for hire.</b>
                </p>


                <p className="aboutme-item">
                    Any doubts so far? <i onClick={ () => { ActionManager.showPage('contact') }}>Drop a line!</i>
                </p>

                <p className="aboutme-item">
                    Honorable mentions:

                    CSS &amp; SCSS, Express, CRA, <a href="https://undraw.co">unDraw Svg's</a>, GSAP among many others...
                </p>
            </div>
            <hr/>
            <AboutmeFooter/>
        </div>
    )
}