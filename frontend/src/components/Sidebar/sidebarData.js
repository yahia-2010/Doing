import {
  FaRegCheckCircle,
  FaRegCalendar,
  FaClock,
  FaRegStickyNote,
  FaCode,
} from "react-icons/fa";

const iconSize = 27.5;

const sidebarData = [
  {
    label: "todo",
    icon: <FaRegCheckCircle size={iconSize} className="side-icon" />,
    link: "todo",
  },
  {
    label: "clock",
    icon: <FaClock size={iconSize} className="side-icon" />,
    link: "clock",
  },
  {
    label: "notes",
    icon: <FaRegStickyNote size={iconSize} className="side-icon" />,
    link: "notes",
  },
  {
    label: "code cards",
    icon: <FaCode size={iconSize} className="side-icon" />,
    link: "code-cards",
  },
  {
    label: "calender",
    icon: <FaRegCalendar size={iconSize} className="side-icon" />,
    link: "calender",
  },
];

export default sidebarData;
