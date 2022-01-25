import styles from "../styles/Quote.module.scss";

export default function Quote({
  quote: { text, name, occupation },
}: {
  quote: {
    text: string;
    name: string;
    occupation: string;
  };
}) {
  return (
    <div className={styles.quote}>
      <q className={styles.quote__text}>{text}</q>
      <div className={styles.info}>
        <span className={styles.info__name}>{name}</span>
        <span className={styles.info__occupation}>{occupation}</span>
      </div>
    </div>
  );
}
