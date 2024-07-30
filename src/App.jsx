import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Faculties from './pages/Faculties';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/faculties',
    element: <Faculties />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
