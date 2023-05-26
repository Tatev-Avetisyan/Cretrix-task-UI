import User from "../../assets/user.png";
import BgImage from "../../assets/BackgroundImage.png";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <img className={styles.bg} src={BgImage} alt="bgColor" />
      <img className={styles.user} src={User} alt="bgColor" />
      <p className={styles.text}>1237 views • 1 day ago </p>
    </header>
  );
};

export default Header;
