import {
  FaRegCheckCircle,
  FaRegCalendar,
  FaClock,
  FaRegStickyNote,
  FaCode,
} from "react-icons/fa";

const sidebarData = [
  {
    label: "todo",
    icon: <FaRegCheckCircle size={""} className="" />,
    link: "todo",
  },
  {
    label: "clock",
    icon: <FaClock size={""} className="" />,
    link: "clock",
  },
  {
    label: "notes",
    icon: <FaRegStickyNote size={""} className="" />,
    link: "notes",
  },
  {
    label: "code cards",
    icon: <FaCode size={""} className="" />,
    link: "code-cards",
  },
  {
    label: "calender",
    icon: <FaRegCalendar size={""} className="" />,
    link: "calender",
  },
];

export default sidebarData;
