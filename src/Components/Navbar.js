import {Link} from "react-router-dom"
import { CustomLink } from "./CustomLink"
import './Navbar.css';


export default function Navbar() {
    return (
    <nav className = "nav">
        
<Link to="/" className ="site-title">Welcome to Origin Streetwear</Link>
    
    <ul>
      <li><CustomLink to="/Landing">Home</CustomLink></li>
      <li><CustomLink to="/Product">Products</CustomLink></li>
      <li><CustomLink to="/Checkout">Checkout</CustomLink></li>
    </ul>
  </nav>
)
}


