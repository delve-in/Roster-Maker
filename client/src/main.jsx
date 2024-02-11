import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './pages/Error.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import App from './App.jsx'
import Roster from './pages/Roster.jsx'
import Availability from './pages/Availability.jsx'
import Schedule from './pages/Schedule.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <Dashboard/>,
      },
      {
        path: 'roster',
        element: <Roster/>,
      },
      {
        path: 'availability',
        element: <Availability/>,
      },
      {
        path: 'schedule',
        element: <Schedule/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
