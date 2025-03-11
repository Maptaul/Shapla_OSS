import { FaFileAlt, FaCreditCard } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa6";
import { GiBigDiamondRing } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { MdFamilyRestroom, MdHowToVote } from "react-icons/md";
import { SiSuckless } from "react-icons/si";
import { TbBrandGuardian, TbWorldCheck } from "react-icons/tb";

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
    title: "Not a Rohingya Attestation",
    icon: <FaCreditCard className="icon" />,
  },
  {
    title: "NID & Document Verification",
    icon: <FaIdCard className="icon" />,
  },
  {
    title: "Inheritance Certificate",
    icon: <IoIosPeople className="icon" />,
  },
  {
    title: "Family Certificate",
    icon: <MdFamilyRestroom className="icon" />,
  },
  {
    title: "Successor Certificate",
    icon: <SiSuckless className="icon" />,
  },
  {
    title: "Guardian Consent Certificate",
    icon: <TbBrandGuardian className="icon" />,
  },
  {
    title: "Orphan Certificate",
    icon: <MdFamilyRestroom className="icon" />,
  },
  {
    title: " Married Certificate ",
    icon: <GiBigDiamondRing className="icon" />,
  },
  {
    title: "Unmarried Certificate",
    icon: <GiBigDiamondRing className="icon" />,
  },
  {
    title: "Remarriage Certificate",
    icon: <GiBigDiamondRing className="icon" />,
  },
  {
    title: " No Remarriage Attestation ",
    icon: <GiBigDiamondRing className="icon" />,
  },
  {
    title: "Widow Attestation ",
    icon: <GiBigDiamondRing className="icon" />,
  },
];
