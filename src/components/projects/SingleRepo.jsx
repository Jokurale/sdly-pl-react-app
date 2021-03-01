import "./SingleRepo.scss"

import { GoRepo as RepoIcon } from 'react-icons/go'

export default function SingleRepo({repo}) {
    const { full_name, html_url, language, license, description } = repo

    let license_name = "MIT License"

    if (license !== null) {
        license_name = license.name
    }

    return (
        <div className="SingleRepo">
            <div className="SingleRepo__Header">
                <span className="SingleRepo__Header--decor">
                    <RepoIcon />
                </span>
                 <a href={html_url}>{full_name}</a>
            </div>
            <div className="SingleRepo__Body">{description}</div>
            <div className="SingleRepo__Footer">{language} | {license_name}</div>
        </div>
    )
}