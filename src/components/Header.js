import images from '../../images/Food_icon.jpeg';

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img src={images} alt="Food Icon"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;