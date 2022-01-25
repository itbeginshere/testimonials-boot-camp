import styles from "../styles/Person.module.scss";

export default function Person({
  img,
  setTestimonial,
}: {
  img: string;
  setTestimonial: (direction: string) => void;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.container__person}>
        <img
          src={img}
          alt={"person"}
          className={styles.container__person__image}
        />
        <div className={styles.container__buttongroup}>
          <img
            src={"/assets/icon-prev.svg"}
            alt={"next testimonial"}
            className={styles.container__buttongroup__img}
            onClick={() => setTestimonial("left")}
          />
          <img
            src={"/assets/icon-next.svg"}
            alt={"previous testimonial"}
            className={styles.container__buttongroup__img}
            onClick={() => setTestimonial("right")}
          />
        </div>
      </div>
    </div>
  );
}
