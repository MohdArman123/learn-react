import "./App.css";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Tables from "./components/Tables";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import MemoComp from "./components/MemoComp";
import RefsDemo from "./components/RefsDemo";

function App() {
  return (
    <div className="App">
      {/* <LifecycleA/> */}
      {/* <FragmentDemo/> */}
      {/* < Tables /> */} 
      {/* <ParentComp /> */}
      {/* <PureComp /> */}
      {/* <MemoComp /> */}
      <RefsDemo />
    </div>
  );
}

export default App;
