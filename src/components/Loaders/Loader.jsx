import React from "react";
import "./loader.css";

import { ThreeBody } from '@uiball/loaders';

function Loader(props) {
  return <div className="loader"><ThreeBody {...props} /></div>;
}

export default Loader;