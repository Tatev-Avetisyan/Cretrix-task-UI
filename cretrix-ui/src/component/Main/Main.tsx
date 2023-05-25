import React from "react";
import Header from "../Header/Header";
import InfoPart from "../Info/Info";
import ActionArea from "../Footer/ActionArea";

import styles from "./main.module.scss";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <InfoPart />
      <ActionArea />
    </div>
  );
};

export default Main;
