import PageRefs from "../../js/PageRefs"

import ProjectsHeader from "./ProjectsHeader"
import ProjectsBody from "./ProjectsBody"
import ProjectsFooter from "./ProjectsFooter"

import "./ProjectsPage.scss"

export default function ContactPage() {

    return (
        <div className="page-projects" ref={PageRefs.getProjectsRef()}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ProjectsHeader/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <ProjectsBody/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <ProjectsFooter/>
                    </div>
                </div>
            </div>
        </div>
    )
}

