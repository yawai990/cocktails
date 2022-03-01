import { Link } from "react-router-dom";

const Navbar = () => {
    return <nav>
        <div className="logo">
            <Link to='/' className="link">
                <h1>Navigate</h1>
            </Link>
        </div>
        <ul className="nav-links">
            <Link to='/' className="link nav-item">Home</Link>
            <Link to='/about' className="link nav-item">About</Link>
            <Link to='/addcocktail' className="link nav-item">Add New Cocktail</Link>
        </ul>
    </nav>
}
export default Navbar;