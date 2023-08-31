import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import('preline');
import { RouterProvider } from 'react-router-dom';
import route from './routes/routes.jsx';
import {  HelmetProvider } from 'react-helmet-async';
import 'aos/dist/aos.css'
import AuthProvider from './context/AuthProvider.jsx';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/index.js';

//store
const store = createStore(rootReducer,composeWithDevTools());

ReactDOM.createRoot(document.getElementById('root')).render(
        <HelmetProvider>
            <Provider store={store}>
             <AuthProvider>
                <RouterProvider router={route}>                
                        <App />
                 </RouterProvider>
             </AuthProvider>
            </Provider>
        </HelmetProvider>
)