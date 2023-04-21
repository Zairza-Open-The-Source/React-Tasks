
import './App.css';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import RootLayout from './layouts/MainLayout';
import HomePage from './routes/HomePage';
import ProjectsPage from './routes/ProjectsPage';
import AchievementsPage from './routes/AchievementsPage';
function App() {


   const router = createBrowserRouter([  
     {
      path:'/',
      element: <RootLayout/>,
      children: [  
        {
          index: true,
          element: <HomePage/>
        },
        {
          path: 'projects',
          element: <ProjectsPage/>
        },{
          path: 'achievements',
          element: <AchievementsPage/>
        }

      ]

}])

   
  return <RouterProvider router={router} />
    

}

export default App;
