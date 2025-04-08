import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";

import RootLayout from "./Layout/RootLayout";
import ContactLayout from "./Layout/ContactLayout";
import ContactInfo from "./Components/ContactInfo";
import ContactForm from "./Components/ContactForm";
import NotFound from "./Components/NotFound";
import JobsLayout from "./Layout/JobsLayout";
import Jobs from "./pages/Jobs";
import { jobsLoader } from "./services/JobsLoader";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="Products" element={<Products />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<ContactLayout />}>
          <Route path="contactInfo" element={<ContactInfo />} />
          <Route path="contactForm" element={<ContactForm />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="jobs" element={<JobsLayout />}>
          <Route index element={<Jobs />} loader={jobsLoader}/>
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
