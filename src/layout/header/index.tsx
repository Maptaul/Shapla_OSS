import Link from "next/link";
import styles from "./header.module.scss";
import { Container } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Image from "next/image";
export default function Header() {
  const [show, setShow] = useState(false);

  const toggleClass = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <Container className={styles.container}>
            <div className={styles.nav}>
              <div className={styles.logo}>
                <Link href="/">
                  <Image
                    src="/images/logos.png"
                    alt="Shapla O.S.S"
                    width={60}
                    height={60}
                  />
                </Link>
              </div>
              <ul className={`${show ? styles.show : ""} ${styles.menu}`}>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} href="/locations">
                    Office Locations
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} href="/careers">
                    Careers
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} href="#contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className={styles.btns}>
                <div className={styles.contact}>
                  <Link className={styles.navLink} href="/e-services">
                    e-Services
                  </Link>
                </div>
                <div className={styles.hamMenu} onClick={toggleClass}>
                  <GiHamburgerMenu />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
}
