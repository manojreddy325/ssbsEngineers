import React from "react"
import Header from "../common/Header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home";
import Footer from "../common/Footer/Footer";
import About from "../about/About"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import OurProjects from "../home/OurProjects/OurProjects";
import FaSystem from "../faSystem/FaSystem";
import Hydrant from '../hydrant/Hydrant';
import Booster from '../booster/Booster';
import PaSystem from '../paSystem/PaSystem';
import PumpRoom from '../pumpRoom/PumpRoom';
import Raiser from '../raiser/Raiser';
import Signage from '../signage/Signage';
import Sprinkler from '../sprinkler/Sprinkler';
import Profile from "../Profile/Profile";
import Developer from "../home/Developer";

const Pages = () => {
  return (
    <>
      <Router>
        <Developer />
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/our-projects' component={OurProjects} />
          <Route exact path='/fasystem' component={FaSystem} />
          <Route exact path='/hydrant' component={Hydrant} />
          <Route exact path='/booster' component={Booster} />
          <Route exact path='/pasystem' component={PaSystem} />
          <Route exact path='/pumproom' component={PumpRoom} />
          <Route exact path='/raiser' component={Raiser} />
          <Route exact path='/signage' component={Signage} />
          <Route exact path='/sprinkler' component={Sprinkler} />
          <Route exact path='/profile' component={Profile} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages