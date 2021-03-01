import NavbarBrand from './NavbarBrand'
import NavbarItems from './NavbarItems'

import './Nav.scss'

export default function Nav() {
    return (
        <nav className="row navbar">
            <div className="col-12 d-flex align-items-center justify-content-between">
                <NavbarBrand/>
                <NavbarItems/>
            </div>
        </nav>
    )
}