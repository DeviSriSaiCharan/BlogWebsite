import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {SignIn, SignUp} from './pages/exports';
import './App.css'

const router = createBrowserRouter([
  {
    path : '/signUp',
    element : <SignUp/>,
  },
  {
    path : '/signIn',
    element : <SignIn/>,
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
