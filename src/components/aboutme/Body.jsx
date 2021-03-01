import Footer from "./Footer"
import Accordion from "./Accordion"

import "./Body.scss"

export default function AboutmeBody() {
    return (
        <div className="Aboutme__Accordions">
            <Accordion title="Quite personal">
                Young programming enthusiast. Now studying in Lublin. Half a year of commercial experience. <br/> Started as a backend php-based junior, now trying to keep up with the times by tech-stack mentioned below. <br/>
                Native polish. Advanced english speaker. German language isn't my specialty.
            </Accordion>

            <Accordion title="Intrests">
                Obviosuly programming. Despite that - I play drums, at least I try not to get my ass kicked out of the house. Sci-fi books and topics are on the second place. <br/> I'm also familiar with car mechanics and detailing, in some way. <br/> From time to time I like to get in touch with Adobe XD and desing some sketchy things like this app's theme. <br/>
                <i>Simplicity is dominating, isn't it?</i>
            </Accordion>

            
            <Accordion title="Programming">
                SOLID principles, DRY, KISS, YAGNI, Clean Code at all costs. <br/> Constant Refactoring, trying to comment my code as good as I can. <br/>
                <i>We all know how it is.</i>
            </Accordion>

            <Accordion title="Frontend">
                UI/UX using Adobe's stack - Illustrator, XD and Photoshop for small corrections. Mostly React via CRA. Some parts of Boostrap and Tailwind for minor purposes. Obviously JavaScript for app interactions among much more stuff.
                GSAP animation platform for things based on eye-catching effect.
                SCSS for styling. Trying to do my best when it comes to RWD.
            </Accordion>

            <Accordion title="Backend">
                <i>So... what to start with?</i> <br/>
                Hardware, DNS and SSL configuration with ease. <br/>
                VM's based on Google Cloud Platform. <br/>
                Know how web-data flows and how potential request looks like. <br/>
                Touched some compiled languages such as Rust and C++ - WebAssembly is coming. <br/>
                Know Python, PHP and JavaScript. <br/>
                Using Node.js and Express.js with various packages (helmet, joi, bcrypt, jwt) daily. <br/>
                Mostly using cloud version of MongoDB for data-storage purposes. <br/> 
                Know how to use MySQL with PHPMyAdmin. <br/>
                Minor knowledge about PostgreSQL. <br/>
                Mastering building API's - Data-exchange as well as auth. <br/>
                Haven't touched Docker yet. <br/>
                <i>I think that's all.</i>
            </Accordion>

            <Accordion title="Actual techstack">
                JavaScript have started to by my second name during the last year. Changing my previous php-based approach to JS was a game changer. <br/>
                As mentioned - PHP 7+ <br/>
                Also Python at moderete level and C++ and Rust with minor knowledge.
            </Accordion>

            <Accordion title="Actual tools">
                Mainly VSCode, with all sort of prettiers and linting tools. Familiar with PyCharm because of incoming IT mature exam. <br/>
                Git &amp; GitHub. <br/>
                Often npm and composer when I'm getting lazy. <br/>
                Some touches with JEST and Jira. <br/>
                <i>Another resolved ticket. Now's lunchtime</i>
            </Accordion>

            <Accordion title="2k21 Todo's">
                TypeScript, GoLang, Python, Flutter, Dart, GraphQL. <br/>
                Redux and some frameworks such as Django are already included. <br/>
                Starting with AWS, mastering GCP. <br/>
                Educate more about applications security and way data flows. <br/>
                Get used to caching. <br/>
                Place emphasis on application testing and approach before even writing. first lines of code. <br/>
                Master authorization techniques such as JWT and OAuth. <br/>
                Get on well with CI/CD and other devops. <br/>
                <i>I know that's a lot. But who cares.</i>
            </Accordion>
            <Footer/>
        </div>
    )
}