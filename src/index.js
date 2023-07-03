import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FirebaseContext } from "./store/Context";
import firebase from "./firebase/config";
import Context from "./store/Context";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <Context>
      <App />
    </Context>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { FirebaseContext } from "./store/FirebaseContext";
// import firebase from "./firebase/config";

// ReactDOM.render(
//   <FirebaseContext.Provider value={firebase}>
//     <App />
//   </FirebaseContext.Provider>,
//   document.getElementById("root")
// );
