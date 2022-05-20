import React, { Suspense } from "react";
import "./App.scss";
import Test from "screens/test/test.screen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "store/store";
import { Provider } from "react-redux";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "common_components/hoc/main.hoc";
// _NSI_

const token = localStorage.getItem("token");

function App() {
  return (
    <Provider store={store}>
      <ToastContainer position="top-center" transition={Slide} />
      <BrowserRouter>
        <Suspense fallback={<div />}>
          <Routes>
            <Route path="/" element={<Test />}></Route>
            <Route
              path="/test"
              element={
                <Main>
                  <Test />
                </Main>
              }
            ></Route>
            _NR_
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
