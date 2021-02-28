import "./SingleRepo.scss"

import { GoRepo as RepoIcon } from 'react-icons/go'

export default function SingleRepo(props) {
    const { full_name, html_url, language, license, description } = props.repo

    let license_name = "MIT License"

    if (license !== null) {
        license_name = license.name
    }

    return (
        <div className="single-repo">
            <div className="repo-header">
                <span className="header-decor">	<RepoIcon /> </span>
                <a href={html_url}>{full_name}</a></div>
            <div className="repo-body">{description}</div>
            <div className="repo-footer">{language} | {license_name}</div>
        </div>
    )
}