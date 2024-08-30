import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../App.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider , Outlet} from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantsMenu from './components/RestaurantsMenu';
import UserContext from '../utils/UserContext';
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';
import Cart from './components/Cart';

const Grocery = lazy(()=> import('./components/Grocery'));
const About = lazy(()=> import('./components/About'));

const AppLayout = () =>{
    const [userName, setUserName] =useState();

    useEffect(()=>{
        const data ={
            name:"Chanikya",
        };
        setUserName(data.name);
    },[])
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
        <div className='app'>
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/About',
                element:<About />,
            },
            {
                path:'/Contact',
                element:<Contact />,
            },
            {
                path:'/Grocery',
                element:(
                <Suspense fallback={<h1>Loading.....</h1>}>
                    <Grocery />
                </Suspense>
                ),
            },
            {
                path:'/restaurants/:resId',
                element:<RestaurantsMenu />,
            },
            {
                path:'cart',
                element:<Cart/>
            }
           
        ],
        errorElement:<Error/>,
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);