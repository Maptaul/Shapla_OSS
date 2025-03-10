import {
  FaFileAlt,
  FaCreditCard,
  FaAmbulance,
  FaCommentDots,
} from "react-icons/fa";
import { FaIdCard } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { MdHowToVote } from "react-icons/md";
import { TbWorldCheck } from "react-icons/tb";

export const services = [
  {
    title: "Citizenship Certificate",
    icon: <FaFileAlt className="icon" />,
  },
  {
    title: "Nationality Certificate",
    icon: <TbWorldCheck className="icon" />,
  },
  {
    title: "Permanent Resident Certificate",
    icon: <IoIosPeople className="icon" />,
  },
  {
    title: "Voter Information Verification Attestation",
    icon: <MdHowToVote className="icon" />,
  },
  {
    title: "New Voter Attestation",
    icon: <FaIdCard className="icon" />,
  },
  {
    title: "Voter Area Transfer Attestation",
    icon: <FaIdCard className="icon" />,
  },
  {
    title: "National ID Information Correction Attestation",
    icon: <FaIdCard className="icon" />,
  },
  {
    title: "Voter List Inclusion Attestation",
    icon: <FaIdCard className="icon" />,
  },
  {
    title: "pay fees",
    icon: <FaCreditCard className="icon" />,
  },
  {
    title: "emergency service",
    icon: <FaAmbulance className="icon" />,
  },
  {
    title: "feedback",
    icon: <FaCommentDots className="icon" />,
  },
];
