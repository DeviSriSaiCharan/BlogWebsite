import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {SignIn, SignUp, Explore, BlogWrite} from './pages/exports';
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
  },
  {
    path : '/write',
    element : <BlogWrite/>
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
