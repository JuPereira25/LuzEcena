import FooterInfo from "./FooterInfo";
import FooterLogo from "./FooterLogo";
import styles from "./Footer.module.css";
import FooterInst from "./FooterInst";
import FooterRedes from "./FooterRedes";
import FooterDesenvolvimento from "./FooterDesenvolvimento";

const Footer = () => {
  return (
    <>
      <footer className={styles.rodape}>
        <div className={styles.rodape_informacoes}>
          <FooterLogo />
          <FooterInfo />
          <FooterInst />
          <FooterRedes />
        </div>
      </footer>
      <FooterDesenvolvimento />
    </>
  );
};

export default Footer;