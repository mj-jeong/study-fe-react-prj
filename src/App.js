import "./App.css"
import React from 'react'
import Composition from "./components/2-4.Props/Composition"
import Extraction from './components/2-4.Props/Extraction/Extraction';
import ClassComponent from "./components/2-5.State/ClassComponent";
import FunctionalComponent from "./components/2-5.State/FunctionalComponent";
import ClassComponent2 from "./components/2-6.LifeCycle/ClassComponent"
import Event from './components/2-7.Event/Event';
import Condition from './components/2-8.ConditionalRendering/Condition';
import List from './components/2-9.List/List';
import ControlledComponent from "./components/2-10.Form/ControlledComponent";
import UnControlledComponent from "./components/2-10.Form/UnControlledComponent";
import State from "./components/3-3.Hooks/State";
import Reducer from "./components/3-3.Hooks/Reducer";
import WelcomeDialog from "./components/3-5.Composition/WelcomeDialog";
import Dialog from "./components/3-6.Composition2/Dialog";
import ThankyouDialog from "./components/3-6.Composition2/ThankyouDialog";
import Input from "./components/3-7.HOC/Input";
import Button from "./components/3-7.HOC/Button";
import WithLoading from "./components/3-7.HOC/withLoading";
import Memo from "./components/3-8.Memoization/Memo"
import Example from "./components/3-11.Portal/Example"
import Component from "./components/3-14.PropTypes/Component";

function App() {
  return (
    <div className="App">
      {/* <Example /> */}
      {/* <FunctionalComponent /> */}
      {/* <Composition /> */}
      {/* <Extraction /> */}
      {/* <ClassComponent2/>  */}
      {/* <Event/> */}
      {/* <Condition /> */}
      {/* <List /> */}
      {/* <ControlledComponent /> */}
      {/* <UnControlledComponent/> */}
      {/* <State /> */}
      {/* <Reducer/> */}
      {/* <WelcomeDialog/> */}
      {/* <Dialog/> */}
      {/* <ThankyouDialog /> */}
      {/* <Input /> */}
      {/* <Button /> */}
      {/* <Memo/> */}
      <Component />
    </div>
  );
}

export default App;
