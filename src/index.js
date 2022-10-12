import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "AppContext";
import {createStore} from "redux";
import rootReducer from "redux/root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { addAuthHeader } from "apis/axiosConfig";
import { createSetAuthTokenAction, createSetUidAction } from "redux/auth-reducer";

const store = createStore(rootReducer,composeWithDevTools());

//Redux에 인증 정보 설정
store.dispatch(createSetUidAction(sessionStorage.getItem("uid") || ""));
store.dispatch(createSetAuthTokenAction(sessionStorage.getItem("authToken") || ""));
//store.state.colorReducer
//store.dispatch()

//Axios에 인증 헤더 추가
if(sessionStorage.getItem("uid")){
  addAuthHeader(sessionStorage.getItem("authToken"));
}
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
