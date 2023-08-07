import React from 'react'
import Composition from "./components/2-4.Props/Composition"
import Extraction from './components/2-4.Props/Extraction/Extraction';
import ClassComponent from "./components/2-5.State/ClassComponent";
import FunctionalComponent from "./components/2-5.State/FunctionalComponent";
import ClassComponent2 from "./components/2-6.LifeCycle/ClassComponent"


function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <Composition />
      <Extraction />
      <ClassComponent2/>
    </div>
  );
}

export default App;
