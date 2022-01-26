import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Destinations from "./Components/Destinations/Destinations";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";
import SignIn from "./Components/SignIn/SignIn";
import AuthProvider from "./Context/AuthProvider";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div>
      <AuthProvider>
        <div className="page-container">
          <div className="content-wrap">
            <BrowserRouter>
              <ScrollToTop />
              <Header></Header>
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <Route path="/home">
                  <Home></Home>
                </Route>
                <Route path="/about">
                  <About></About>
                </Route>
                <Route path="/destinations">
                  <Destinations></Destinations>
                </Route>
                <Route path="/blogs">
                  <Blogs></Blogs>
                </Route>
                <Route path="/signin">
                  <SignIn></SignIn>
                </Route>
              </Switch>
            </BrowserRouter>
          </div>
          <Footer></Footer>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
