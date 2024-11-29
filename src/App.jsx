// react router
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// layout
import RootLayout from "./layout/RootLayout";
// pages
import Home from "./pages/Home";
import ExploreProduct from "./pages/ExploreProducts";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import SentiHome from "./component/sentiment/SentiHome";
import SectionTwo from "./pages/SectionTwo";
import Signup from "./component/auth/Signup";
import Login from "./component/auth/Login";

// react toast
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      {/* <Route index element={<Home />} /> */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/explore/:category" element={<ExploreProduct />}></Route>
      <Route path="/product/:productId" element={<Product />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/feedback" element={<SentiHome />}></Route>
      <Route path="/section" element={<SectionTwo />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          style: {
            padding: "16px",
            fontSize: "1.6rem",
          },
        }}
      />
    </>
  );
}

export default App;
