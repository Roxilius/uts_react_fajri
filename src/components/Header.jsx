import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <header className="sticky z-10 top-0 bg-blue-400 flex justify-between text-2xl text-white p-3 shadow-lg">
            <h1>My Film</h1>
            <nav>
                <ul className="flex gap-5">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/film"}>Film</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}
 
export default Header;