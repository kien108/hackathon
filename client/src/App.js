import logo from "./logo.svg";
import "./App.scss";
import Test from "./components/Test/Test";
import Calendar from "./components/Calendar/Calendar";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Documentation from "./components/Documentation/Documentation";

function App() {
   return (
      <Router>
         <Switch>
            <div className="App">
               <Header />
               <Route exact path={"/"}>
                  <Calendar />
               </Route>
               <Route path={"/calendar"}>
                  <Calendar />
               </Route>
               <Route path={"/document"}>
                  <Documentation />
               </Route>
            </div>
         </Switch>
      </Router>
   );
}

export default App;
