import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {SignIn, SignUp, Explore} from './pages/exports';
import './App.css'

const router = createBrowserRouter([
  {
    path : '/signUp',
    element : <SignUp/>,
  },
  {
    path : '/signIn',
    element : <SignIn/>,
  },
  {
    path : '/explore',
    element : <Explore/>
  }
]
);

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
