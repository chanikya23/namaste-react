import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import '../App.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider , Outlet} from 'react-router-dom';
// import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantsMenu from './components/RestaurantsMenu';
//  import Grocery from './components/Grocery';
// import '../index.css'; 


const Grocery = lazy(()=> import('./components/Grocery'));
const About = lazy(()=> import('./components/About'));

const AppLayout = () =>{
    return(
        <div className='app'>
            <Header />
            <Outlet />
        </div>
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
            }
           
        ],
        errorElement:<Error/>,
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);