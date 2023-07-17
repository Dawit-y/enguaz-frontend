import "./App.css";
import Home from "./layouts/Home";
import Booking from "./components/Booking";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Service from "./components/Service";
import Contact from "./components/Contact";
import About from "./components/About";
import BookingLayout from "./layouts/BookingLayout";
import ListTrips from "./components/ListTrips";
import TripDetail from "./components/TripDetail";
import TripLayout from "./layouts/TripLayout";
import Seat from "./components/Seat";
import TripDetailLayout from "./layouts/TripDetailLayout";
import Payment from "./components/Payment";
import SeatLayout from "./layouts/SeatLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="booking" element={<BookingLayout />}>
        <Route index element={<Booking />} />
        <Route path="trips" element={<TripLayout />}>
          <Route index element={<ListTrips />} />
          <Route path=":id" element={<TripDetailLayout />}>
            <Route index element={<TripDetail />} />
            <Route path="seats" element={<SeatLayout />}>
              <Route index element={<Seat />} />
              <Route path="payment" element={<Payment />} />
            </Route>
          </Route>
        </Route>
      </Route>
      <Route path="services" element={<Service />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
