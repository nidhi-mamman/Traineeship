import { FaSearch } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import '../../CSS/Navbar.css'
import { useContext, useState } from "react"
import { shopContext } from "../../Context/ContextProvider"
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const { searchProducts,getTotalCartItems } = useContext(shopContext)
    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    const handleSearch = (e) => {
        e.preventDefault()
        setQuery(e.target.value)
        searchProducts(e.target.value)
    }
    const handleCategoryChange = (event) => {
        const category = event.target.value;
        if (category === "Men") {
            navigate("/men");
        } else if (category === "Women") {
            navigate("/women");
        } else if (category === "Kids") {
            navigate("/kids");
        } else {
            navigate("/");
        }
    };
    return (
        <>
            <div className="nav-bar">
                <ul>
                    <li className="logo text-4xl font-bold font-serif">
                        SHOPIFY
                    </li>
                    <li>
                        <div className="flex">
                            <select name="categories" className="categories" >
                                <option value="All Categories">All Categories</option>
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                                <option value="Kids">Kids</option>
                            </select>
                            <input type="text" className="search-input" value={query} onChange={handleSearch} />
                            <div className="search-btn">
                                <FaSearch />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center w-28">
                            <NavLink to='/cart'> <div className=" text-black border-none p-1">
                                <BsCart4 size={28} />
                            </div></NavLink>
                            <div className="cart">
                                <p className="mt-1">{getTotalCartItems()}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="nav-items">
                <ul>
                    <NavLink to='/'> <li className="text-white">Home</li></NavLink>
                    <li className="text-white">Shop</li>
                    <li>
                        <select name="categories" className="category" onChange={handleCategoryChange}>
                            <option value="All Categories">All Categories</option>
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Kids">Kids</option>
                        </select>
                    </li>
                    <li className="text-white">FAQ</li>
                    <li className="text-white">Contact</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar