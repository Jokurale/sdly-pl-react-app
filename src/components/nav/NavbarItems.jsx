import "./NavbarItems.scss"
import ActionManager from "../../js/ActionManager"

export default function NavbarItems() {
    return (
        <div className="navbar-items d-flex justify-content-between">
            <h3 className="navbar-item contactSwiper" onClick={ () => ActionManager.showContactPage()}>Contact</h3>
            <h3 className="navbar-item projectSwiper">Projects</h3>
        </div>
    )
}