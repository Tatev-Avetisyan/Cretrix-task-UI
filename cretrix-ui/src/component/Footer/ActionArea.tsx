import Options from "../../assets/Options.svg";
import Like from "../../assets/Like.svg";
import Share from "../../assets/Share.svg";
import styles from "./actionArea.module.scss";

const ActionArea = () => {
  return (
    <div className={styles.wrapper}>
      <img src={Options} alt="Options" />
      <div>
        <img src={Like} alt="Like" />
        <img src={Share} alt="Share" />
      </div>
    </div>
  );
};

export default ActionArea;
