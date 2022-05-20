import React, { useEffect } from "react";
import * as Types from "interfaces/common.interface";
import { testDispatch } from "utils/redux.utils";
import "./test.component.scss";

interface IListComponentProps {
  name?: string;
  email?: string;
  time?: string;
}

export default function Test() {
  useEffect(() => {}, []);

  const handleTest = () => {
    testDispatch({ username: "test" });
  };

  return <div className="container">test</div>;
}
