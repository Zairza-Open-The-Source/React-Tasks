
import './App.css';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/MainLayout';
import HomePage from './routes/HomePage';
import ProjectsPage from './routes/ProjectsPage';
import AchievementsPage from './routes/AchievementsPage';
import SignUp from './routes/SignUp'
import Account from './routes/Account'
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
        },
        {
          path: 'achievements',
          element: <AchievementsPage/>
        },
        {
          path: 'sign-up',
          element: <SignUp/>
        },
        {
          path: 'account',
          element: <Account/>
        }

      ]

}])

   
  return <RouterProvider router={router} />
    

}

export default App;
