import { Route, Redirect } from "react-router-dom";

// HOC
import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantHOC from "./HOC/Restaurant.HOC";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import temp from "./Components/temp";

// Pages
import HomePage from "./Pages/Home.page";
import RestaurantPage from "./Pages/Restaurant.page";

function App() {
  return (
    <>
    <Route path="/" exact >
      <Redirect to="/delivery" />
    </Route>
    <Route path="/restaurant/123" exact >
      <Redirect to = "/restaurant/123/overview" />
    </Route>
    <div className="App">
      <HomeLayoutHOC path="/:type" exact component = {HomePage} />
      <RestaurantHOC path="/restaurant/:id" exact component = {RestaurantPage} />
      <RestaurantHOC path="/restaurant/:id/:type" exact component = {RestaurantPage} />
    </div>
    </>
  )
};

export default App;

