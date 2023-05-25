import styles from "./info.module.scss";

const InfoPart = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        Everything about pineapples and other tropical fruits
      </h2>
      <div className={styles.authorPart}>
        <h3 className={styles.name}>By:</h3>
        <h3 className={styles.name}>Nana McDougall</h3>
      </div>
      <div className={styles.progressPart}>
        <div className={styles.progressText}>
          <p>Progress:</p>
          <p className={styles.percent}>64%</p>
        </div>
        <progress className={styles.progressBar} value="64" max="100">
          64%
        </progress>
      </div>
    </div>
  );
};

export default InfoPart;
