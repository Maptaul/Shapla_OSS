import Footer from "@/layout/footer";
import styles from "./services.module.scss";
import Head from "next/head";
import Header from "@/layout/header";
import { Container } from "react-bootstrap";
import { services } from "@/constants/e-services";
import { useState } from "react";
export default function Home() {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Head>
        <title>e-Services</title>
      </Head>
      <Header />
      <main className={styles.page}>
        <section className={styles.banner}>
          <Container>
            <div className={styles.content}>
              <h1>e-Services for Citizens</h1>
              <p>
                To make public services more accessible and efficient,
                Chattogram is introducing a range of e-Services that can be
                accessed online. These services are designed to save time,
                reduce paperwork, and improve transparency.
              </p>
            </div>
          </Container>
        </section>
        <section className={styles.services}>
          <Container>
            {/* <h2>e-Services</h2> */}
            <div className={styles.wrapper}>
              {services.map((service, index) => (
                <div
                  key={index}
                  className={styles.service}
                  onClick={() => handleServiceClick(service)}
                >
                  <div className={styles.icon}>{service.icon}</div>
                  <div className={styles.content}>
                    <h3>{service.title}</h3>
                    {/* <p>{service.features}</p> */}
                  </div>
                </div>
              ))}
            </div>

            {/* Modal */}
            {showModal && selectedService && (
              <div className={styles.modalOverlay} onClick={handleCloseModal}>
                <div
                  className={styles.modalContent}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className={styles.closeButton}
                    onClick={handleCloseModal}
                  >
                    &times;
                  </button>
                  <h3>{selectedService.title}</h3>

                  {selectedService.requirements && (
                    <>
                      <h4>Required Documents:</h4>
                      <ul>
                        {selectedService.requirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
