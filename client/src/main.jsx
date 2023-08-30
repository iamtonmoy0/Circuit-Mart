import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import('preline');
import { RouterProvider } from 'react-router-dom';
import route from './routes/routes.jsx';
import {  HelmetProvider } from 'react-helmet-async';
import 'aos/dist/aos.css'
import AuthProvider from './context/AuthProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
        <HelmetProvider>
            <AuthProvider>
                <RouterProvider router={route}>
                    
                        <App />
                 </RouterProvider>
            </AuthProvider>
        </HelmetProvider>
)