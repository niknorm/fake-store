import ButtonAbout from "../../../features/Buttons/ui/ButtonAbout";
import ButtonStart from "../../../features/Buttons/ui/ButtonStart";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.mainText}>Make your Outfit wonderful</h1>
        <p className={styles.textCenter}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
          soluta iusto <br />expedita veniam asperiores, cumque id, tempora numquam
          voluptatibus.
        </p>
      </div>
      <div className={styles.buttons}>
        <ButtonStart />
        <ButtonAbout />
      </div>
    </>
  );
};
