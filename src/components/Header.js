import { useEffect, useState } from 'react';
import images from '../../images/Food_icon.jpeg';
import {Link} from 'react-router-dom';

const Header = () =>{

    const [btnNameReact, setBtnNameReact] = useState('Login');
    
    return(
        <div className="header">
            <div className="logo-container">
                <img src={images} alt="Food Icon"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link style={{textDecoration:'none', color:'black'}} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:'none', color:'black'}} to='/about'>About US</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:'none', color:'black'}} to='/contact'>Contact</Link>
                    </li>
                    <li>Cart</li>
                    <button className='login' onClick={()=>{
                        btnNameReact ==='Login'?
                        setBtnNameReact('Logout'):  setBtnNameReact('Login');
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;