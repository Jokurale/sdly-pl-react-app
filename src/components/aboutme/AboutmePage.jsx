import PageRefs from "../../js/PageRefs"

import AboutmeHeader from "./AboutmeHeader"
import AboutmeBody from "./AboutmeBody"

import "./AboutmePage.scss"

export default function AboutmePage() {

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

