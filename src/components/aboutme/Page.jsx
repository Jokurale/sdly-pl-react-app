import PageRefs from "../../js/PageRefs"

import Header from "./Header"
import Body from "./Body"

import { useEffect } from 'react'

import "./Page.scss"

export default function Page({dispatch}) {

    useEffect(() => {
        // If comonent did mount, dispatch ready state to preloader handler
        dispatch()
    }, [])

    return (
        <div className="Page__Aboutme" ref={PageRefs.getAboutmeRef()}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Body />
                    </div>
                </div>
            </div>
        </div>
    )
}

