import Nav from './nav/Nav'
import Jumbotron from './jumbotron/Jumbotron'
import FrontPageSocials from './socials/FrontPageSocials'

export default function FrontPage() {
    return (
        <div className="container h-100 page-front">
            <FrontPageSocials/>
            <Nav />
            <Jumbotron/>
        </div>
    )
}

