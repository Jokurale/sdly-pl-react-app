import "./NavbarItems.scss"
import ActionManager from "../../js/ActionManager"

export default function NavbarItems() {
    return (
        <div className="navbar-items d-flex justify-content-between">
            <h3 className="navbar-item" onClick={ () => ActionManager.showPage('contact')}>Contact</h3>
            <h3 className="navbar-item" onClick={ () => ActionManager.showPage('projects')}>Projects</h3>
        </div>
    )
}