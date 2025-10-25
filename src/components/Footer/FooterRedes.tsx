import styles from "./Footer.module.css";

const FooterRedes = () => {
  return (
    <div className={styles.redes}>
      <h4 className={styles.titulo}>Siga nossas redes:</h4>
      <div className={styles.icones}>
        <a href="#" className={styles.ancora}>
          <img src="/Ícones/Redes sociais/Instragam.svg" alt="Instagram" className={styles.icone} />
        </a>
        <a href="#" className={styles.ancora}>
          <img src="/Ícones/Redes sociais/Tiktok.svg" alt="TikTok" className={styles.icone} />
        </a>
        <a href="#" className={styles.ancora}>
          <img src="/Ícones/Redes sociais/Whatsapp.svg" alt="WhatsApp" className={styles.icone} />
        </a>
      </div>
    </div>
  );
};

export default FooterRedes;