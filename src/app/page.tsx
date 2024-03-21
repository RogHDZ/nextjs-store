
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  console.log('Hola mundo pagina de inicio')
  return (
    <main className={styles.main}>
      <h1>hola mundo</h1>
    </main>
  );
}
