import Nav from '../nav/Nav'
import Jumbotron from './Jumbotron'
import FrontPageSocials from './FrontPageSocials'

import { useEffect } from 'react'

export default function FrontPage({dispatch}) {

    useEffect(() => {
        // If comonent did mount, dispatch ready state to preloader handler
        dispatch()
    }, [])

    return (
        <div className="container h-100 page-front">
            <FrontPageSocials/>
            <Nav/>
            <Jumbotron/>
        </div>
    )
}

