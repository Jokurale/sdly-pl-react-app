import Nav from './nav/Nav'
import Jumbotron from './front/Jumbotron'
import FrontPageSocials from './front/FrontPageSocials'

import { useEffect } from 'react'

import config from '../Config'


export default function FrontPage(props) {

    const { delay } = config.preloader

    useEffect(() => {
        props.preloaderFunc(delay);
    }, [])

    return (
        <div className="container h-100 page-front">
            <FrontPageSocials/>
            <Nav />
            <Jumbotron/>
        </div>
    )
}

