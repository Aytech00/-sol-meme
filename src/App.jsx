

import { RouterProvider, Route, createRoutesFromElements, createBrowserRouter,  } from 'react-router-dom'
import DefaltLayout from './components/Layout/DefaltLayout';
import Home from './pages/Home';

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<DefaltLayout />}>
        <Route path="/" element={<Home />} />
 
      </Route>
    )
  );

  return (
    <>
    <RouterProvider router={routes}>

    </RouterProvider>

    </>
  )
}

export default App




