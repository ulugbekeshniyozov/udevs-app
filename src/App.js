import React from "react";
import Team from "./team/Team";
import Servis from './servis/Servis';
import Design from './design/Design';
import Opt from './opt/Opt';
import Const from "./consalting/Cons";
import Tools from "./tools/Tools";
import Delever from "./delever/Delever";
import Sms from "./smsuz/Sms";
import Form from "./form/Form";
import Nav from './nav/Nav'
import Mobile from './mobile/Mobile'
import Erp from './erp/Opt'
import Footer from "./footer/Footer";
import Iman from './iman/Sms'

function App() {
  return (
    <>
    <Nav/>
    <Servis/>
      <Team/>
      <Mobile/>
      <Erp/>
      <Design/>
      <Opt/>
      <Const/>
      <Tools/>
      <Delever/>
      <Sms/>
      <Iman/>
      <Form/>
      <Footer/>
    </>
  );
}

export default App;
