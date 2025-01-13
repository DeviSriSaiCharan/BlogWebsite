import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {SignIn, SignUp, Explore, BlogWrite, Blog, Profile} from './pages/exports';
import './App.css'
import Library from './pages/Library';
import LikedBlogs from './pages/LikedBlogs';

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
  },
  {
    path : "/profile",
    element : <Profile/>
  },
  {
    path : "/library",
    element : <Library/>
  },
  {
    path : "/likedblogs",
    element : <LikedBlogs/>
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
