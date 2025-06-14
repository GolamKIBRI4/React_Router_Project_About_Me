
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
import JobsDetails from "./Components/JobsDetails";
import { jobsDetailsLoader } from "./services/JobsDetailsLoader";
import Error from "./Components/Error";

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
        <Route path="jobs" element={<JobsLayout />} errorElement={<Error />}>
          <Route index element={<Jobs />} loader={jobsLoader} />
          <Route
            path=":id"
            element={<JobsDetails />}
            loader={jobsDetailsLoader}
          />
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
