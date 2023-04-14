import React from "react";
import Navbar from "./component/Navbar.js";
import MyCard from "./component/MyCard.js";
import ApiData from "./component/ApiData.js";
// import Apis from "./component/Api.js";
// import Api from "./component/Api.js";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Api /> */}
      <ApiData />

      <MyCard />
    </div>
  );
}

export default App;
