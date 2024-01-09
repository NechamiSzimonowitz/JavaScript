import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><NavLink to="/buyhouse"> Buy A House</NavLink></li>
                <li><NavLink to="/sellHouse"> Sell A House</NavLink></li>
            </ul>
        </nav>

    )
}