import "./Items.scss"
import ActionManager from "../../js/ActionManager"

export default function Items() {
    return (
        <div className="Navbar__Items d-flex justify-content-between">
            <h3 className="Navbar__Items--item" onClick={ () => ActionManager.showPage('contact')}>Contact</h3>
            <h3 className="Navbar__Items--item" onClick={ () => ActionManager.showPage('projects')}>Projects</h3>
        </div>
    )
}