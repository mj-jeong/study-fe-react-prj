import style from "./App.css"
import React from 'react'
import Composition from "./components/2-4.Props/Composition"
import Extraction from './components/2-4.Props/Extraction/Extraction';
import ClassComponent from "./components/2-5.State/ClassComponent";
import FunctionalComponent from "./components/2-5.State/FunctionalComponent";
import ClassComponent2 from "./components/2-6.LifeCycle/ClassComponent"
import Event from './components/2-7.Event/Event';
import Condition from './components/2-8.ConditionalRendering/Condition';
import List from './components/2-9.List/List';

function App() {
  return (
    <div className="App">
      {/* <FunctionalComponent />
      <Composition />
      <Extraction />
      <ClassComponent2/> */}
      {/* <Event/> */}
      {/* <Condition /> */}
      <List />
    </div>
  );
}

export default App;
