import styles from "./About.module.css";

function About() {
  return (
    <main className={styles.container}>
      <div>
        <h2>Lorem, ipsum.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum iure
          repudiandae modi delectus tempora <br />sit beatae eaque dolorem sunt soluta
          deleniti, ex ratione suscipit, sapiente unde hic totam neque
          doloribus!
        </p>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          nemo exercitationem tenetur, repellat <br />voluptas quae sapiente minus
          quos! Et corrupti accusamus velit dolore minima?:
        </p>
      </div>
      <div>
        <h2>A Glimpse into the Backend:</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          ipsum quia distinctio et fugiat numquam <br />at eos architecto nobis optio
          aut doloremque.
        </p>
      </div>
      <div>
        <h2>Let's Connect</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Perferendis
          perspiciatis magni animi.
        </p>
      </div>
    </main>
  );
}

export default About;
