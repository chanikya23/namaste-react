import { useState } from 'react';
import images from '../../images/Food_icon.jpeg';

const Header = () =>{

    const [btnNameReact, setBtnNameReact] = useState('Login');

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
                    <button className='login' onClick={()=>{
                        btnNameReact ==='Login'?
                        setBtnNameReact('Logout'):  setBtnNameReact('Login');
                        console.log(btnNameReact);
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;