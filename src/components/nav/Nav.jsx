import NavbarBrand from './NavbarBrand'
import NavbarItems from './NavbarItems'

export default function Nav(props) {
    return (
        <nav className="row navbar">
            <div className="col-12 d-flex align-items-center justify-content-between">
                <NavbarBrand/>
                <NavbarItems/>
            </div>
        </nav>
    )
}