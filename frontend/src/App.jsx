import "./App.css";
import { Route, Routes } from "react-router-dom";
import NewUser from "./Components/NewUser";
import View from "./Components/View";
import Edit from "./Components/Edit";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<View />}></Route>
        <Route path="/newuser" element={<NewUser />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        {/* <Route path="*" element={<Error />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
