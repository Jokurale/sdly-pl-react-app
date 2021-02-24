import "./NavbarItems.scss"

export default function NavbarItems(props) {
    return (
        <div className="navbar-items d-flex justify-content-between">
            <h3 className="navbar-item contactSwiper" onClick={() => {props.showContactPage()}}>Contact</h3>
            <h3 className="navbar-item projectSwiper">Projects</h3>
        </div>
    )
}