import { useAbout } from "../../../shared/ui/Button/hooks/useAbout";
import { useStartShopping } from "../../../shared/ui/Button/hooks/useStartShopping";
import { Button } from "../../../shared/ui/Button/Button";
import styles from "./Home.module.css";

export const Home = () => {
  const startShopping = useStartShopping()
  const learnMore = useAbout()
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
        <Button className={styles.start} text={'start shopping'} onClick={startShopping}/>
        <Button className={styles.about} text={'learn more'} onClick={learnMore} />
      </div>
    </>
  );
};
