import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {SignIn, SignUp, Explore, BlogWrite, Blog} from './pages/exports';
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
  },
  {
    path : '/blog/:id',
    element : <Blog/>
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
