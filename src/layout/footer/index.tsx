import Chatbot from "@/modules/chatBot";
import styles from "./footer.module.scss";
import { Container } from "react-bootstrap";
export default function Footer() {
  return (
    <>
      <footer className={styles.footer} id="contact">
        <Container className={styles.container}>
          <div className={styles.head}>
            <h2>Contact Us</h2>
            <p>Have questions or ideas? We’d love to hear from you!</p>
          </div>
          <ul>
            <li>
              <span>Email</span>: info@smartctg.gov.bd
            </li>
            <li>
              <span>Phone</span>: +880-XXX-XXXXXXX
            </li>
            <li>
              <span>Address</span>: IPL City Centre, 4th Floor, 162 O.R. Nizam
              Rd, Chattogram-4317, Bangladesh.
            </li>
          </ul>
        </Container>
      </footer>
      <Chatbot />
    </>
  );
}
