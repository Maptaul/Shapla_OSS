// import notices from "@/constants/notice";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from "./notice.module.scss";
// import Marquee from "react-fast-marquee";
// import Link from "next/link";

export default function Notice() {
  return (
    <>
      <section className={styles.black_ribbon}>
        <h1 className={styles.ticket_text}>
          অনলাইনে টিকেট কিনুন
          <span>
            <FaArrowRightLong />
          </span>
        </h1>
      </section>
    </>
  );
}
