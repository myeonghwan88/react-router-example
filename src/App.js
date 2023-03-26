// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Links from "./components/Links";
import Login from "./pages/Login";
import NavLinks from "./components/NavLinks";
import { Redirect } from "react-router-dom";

const isLogin = false;

function App() {
  return (
    <BrowserRouter>
      {/* 앱을 새로고침하면서 경로를 이동합니다. */}
      {/* <a href="/">Home</a> */}
      {/* import { Link } from 'react-router-dom';
      브라우저의 주소를 바꾸고,
      맞는 Route 로 화면을 변경합니다. */}
      {/* <Link to="/">Home</Link> */}
      <Links />
      <NavLinks />
      <Switch>
        {/* 큰거에서 작은거 순으로 나열 */}
        {/* <Route path="/login" component={Login} /> */}
        <Route
          path="/login"
          render={() => {
            return isLogin ? <Redirect to="/" /> : <Login />;
          }}
        />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
