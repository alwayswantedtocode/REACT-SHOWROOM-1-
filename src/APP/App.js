import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
//Layouts
import SharedLayout from "../Layout/SharedLayout";

//Brand pages
import Mercedes from "../Pages/Brands/Mercedes/MercedesPage";
import Lexus from "../Pages/Brands/Lexus/LexusPage";
import Toyota from "../Pages/Brands/Toyota/ToyotaPage";

import Dealers from "../Pages/Dealers/Dealers";
import Supports from "../Pages/Supports/Support";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Footer from "../Footer/Footer";
import React from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<LandingPage />} />
      {/* <Route path="Brands" element={<Brands />}> */}
      <Route path="Mercedespage" element={<Mercedes />} />
      <Route path="Lexuspage" element={<Lexus />} />
      <Route path="Toyotapage" element={<Toyota />} />
      {/* </Route> */}
      <Route path="Dealers" element={<Dealers />} />
      <Route path="Support" element={<Supports />} />
      {/* <Route path="Mercedespage" element={<Mercedes />} />
      <Route path="Lexuspage" element={<Lexus />} />
      <Route path="Toyotapage" element={<Toyota />} /> */}
    </Route>
  )
);
const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
