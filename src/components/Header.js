import { useState } from 'react';
import images from '../../images/Food_icon.jpeg';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';

const Header = () =>{

    const [btnNameReact, setBtnNameReact] = useState('Login');
    const onlineStatus = useOnlineStatus();
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg m-4 border-radius">
            <div className="logo-container">
                <img className='w-24 m-5 rounded-full' src={images} alt="Food Icon"/>
            </div>
            <div className="nav-items">
                <ul className='flex p-5 m-5'>
                    <li className='px-4'>
                        Online Status: {onlineStatus? "✅":"🔴"}
                    </li>
                    <li className='px-4'>
                        <Link style={{textDecoration:'none', color:'black'}} to='/'>Home</Link>
                    </li>
                    <li className='px-4'>
                        <Link style={{textDecoration:'none', color:'black'}} to='/about'>About US</Link>
                    </li>
                    <li className='px-4'>
                        <Link style={{textDecoration:'none', color:'black'}} to='/contact'>
                        Contact
                        </Link>
                    </li>
                    <li className='px-4'>
                        <Link style={{textDecoration:'none', color:'black'}} to='/Grocery'>
                        Grocery
                        </Link>
                    </li>
                    <li className='px-4'>Cart</li>
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