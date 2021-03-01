import Nav from '../nav/Nav'
import Jumbotron from './Jumbotron'
import Socials from './Socials'

import { useEffect } from 'react'

export default function Page({dispatch}) {

    useEffect(() => {
        // If comonent did mount, dispatch ready state to preloader handler
        dispatch()
    }, [])

    return (
        <div className="container h-100 Page__Front">
            <Socials/>
            <Nav/>
            <Jumbotron/>
        </div>
    )
}

