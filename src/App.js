import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";
function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      <div className="quantity">
        <span onClick={() => dispatch(decNumber())}> - </span>

        <input type="text" value={myState} />

        <span onClick={() => dispatch(incNumber())}> + </span>
      </div>
    </div>
  );
}

export default App;
