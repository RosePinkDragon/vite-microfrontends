import { mount } from "childApp/App";

import MFEComponent from "../components/MFEComponent";

const ChildApp = () => {
  return (
    <MFEComponent baseName="/childApp" routingPrefix="childApp" mount={mount} />
  );
};

export default ChildApp;
