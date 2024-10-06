import { useState } from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainPage from './pages/MainPage';

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={< MainPage />}>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App
