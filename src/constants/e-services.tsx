import {
  FaFileAlt,
  FaCreditCard,
  FaMoneyCheckAlt,
  FaHouseDamage,
  FaBirthdayCake,
} from "react-icons/fa";
import {
  FaAccessibleIcon,
  FaBinoculars,
  FaFileInvoiceDollar,
  FaGasPump,
  FaIdCard,
  FaInternetExplorer,
  FaPassport,
  FaSunPlantWilt,
  FaWarehouse,
  FaWater,
} from "react-icons/fa6";
import {
  GiBigDiamondRing,
  GiCharacter,
  GiDeathNote,
  GiTribalMask,
} from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { IoDocumentAttach } from "react-icons/io5";
import {
  MdChildCare,
  MdFamilyRestroom,
  MdHowToVote,
  MdLiving,
  MdMiscellaneousServices,
} from "react-icons/md";
import { RiUserSearchLine } from "react-icons/ri";
import { SiSuckless } from "react-icons/si";
import {
  TbBrandGuardian,
  TbLicense,
  TbSunElectricity,
  TbTax,
  TbWorldCheck,
} from "react-icons/tb";

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
  {
    title: "Childless Attestation",
    icon: <MdChildCare className="icon" />,
  },
  {
    title: "Annual Income Certificate",
    icon: <FaMoneyCheckAlt className="icon" />,
  },
  {
    title: "Monthly Income Certificate ",
    icon: <FaFileInvoiceDollar className="icon" />,
  },
  {
    title: " Financial Insolvency Certificate ",
    icon: <FaFileInvoiceDollar className="icon" />,
  },
  {
    title: "Unemployment Certificate ",
    icon: <RiUserSearchLine className="icon" />,
  },
  {
    title: " Trade License  ",
    icon: <TbLicense className="icon" />,
  },
  {
    title: "Premises License",
    icon: <FaWarehouse className="icon" />,
  },
  {
    title: "Power of Attorney Attestation ",
    icon: <GoLaw className="icon" />,
  },
  {
    title: " No Objection Certificate (NOC) ",
    icon: <FaBinoculars className="icon" />,
  },
  {
    title: "Infrastructure Construction Permission Certificate ",
    icon: <FaHouseDamage className="icon" />,
  },
  {
    title: " Character Certificate ",
    icon: <GiCharacter className="icon" />,
  },
  {
    title: "Same Person Attestation",
    icon: <GiCharacter className="icon" />,
  },
  {
    title: " Notary Services ",
    icon: <GoLaw className="icon" />,
  },
  {
    title: "Tax Identification Number (TIN) ",
    icon: <TbTax className="icon" />,
  },
  {
    title: "Business Identification Number (BIN) ",
    icon: <TbTax className="icon" />,
  },
  {
    title: "Freedom Fighter Attestation ",
    icon: <GiCharacter className="icon" />,
  },
  {
    title: " Indigenous Certificate ",
    icon: <GiTribalMask className="icon" />,
  },
  {
    title: "Disability Certificate ",
    icon: <FaAccessibleIcon className="icon" />,
  },
  {
    title: " Community Certificate ",
    icon: <MdFamilyRestroom className="icon" />,
  },
  {
    title: " Agricultural Attestation ",
    icon: <FaSunPlantWilt className="icon" />,
  },
  {
    title: " Birth Certificate ",
    icon: <FaBirthdayCake className="icon" />,
  },
  {
    title: "Death Certificate ",
    icon: <GiDeathNote className="icon" />,
  },
  {
    title: " Living Person Attestation ",
    icon: <MdLiving className="icon" />,
  },
  {
    title: "Miscellaneous Certificate ",
    icon: <MdMiscellaneousServices className="icon" />,
  },
  {
    title: "Passport & Document Check ",
    icon: <FaPassport className="icon" />,
  },
  {
    title: "All kind of Correction Certificates ",
    icon: <IoDocumentAttach className="icon" />,
  },
  {
    title: "Electricity Bill Payment ",
    icon: <TbSunElectricity className="icon" />,
  },
  {
    title: " Water Bill Payment ",
    icon: <FaWater className="icon" />,
  },
  {
    title: "Gas Bill Payment ",
    icon: <FaGasPump className="icon" />,
  },
  {
    title: " Internet and Mobile Bill Payment ",
    icon: <FaInternetExplorer className="icon" />,
  },
];
