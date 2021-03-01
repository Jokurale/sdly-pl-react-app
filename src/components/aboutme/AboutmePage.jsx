import PageRefs from "../../js/PageRefs"

import AboutmeHeader from "./AboutmeHeader"
import AboutmeBody from "./AboutmeBody"

import { useEffect } from 'react'

import "./AboutmePage.scss"

export default function AboutmePage({dispatch}) {

    useEffect(() => {
        // If comonent did mount, dispatch ready state to preloader handler
        dispatch()
    }, [])

    return (
        <div className="page-aboutme" ref={PageRefs.getAboutmeRef()}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <AboutmeHeader/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <AboutmeBody />
                    </div>
                </div>
            </div>
        </div>
    )
}

