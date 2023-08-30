import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import('preline')
import { RouterProvider } from 'react-router-dom'
import route from './routes/routes.jsx'
// import "antd/dist/antd.css";
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={route}>
    <App />
    </RouterProvider>
)