import { ActionArea, Header, InfoPart } from "..";

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
