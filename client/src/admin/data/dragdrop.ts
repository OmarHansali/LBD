import avatar5 from "../../assets/images/avatar-5.png";
import avatar7 from "../../assets/images/avatar-7.png";
import avatar10 from "../../assets/images/avatar-10.png";
import avatar13 from "../../assets/images/avatar-13.png";
import avatar16 from "../../assets/images/avatar-16.png";
import avatar17 from "../../assets/images/avatar-17.png";
import avatar20 from "../../assets/images/avatar-20.png";

import dropbox from "../../assets/images/dropbox.png";
import badoo from "../../assets/images/badoo.png";
import invision from "../../assets/images/invision.png";
import bitbucket from "../../assets/images/bitbucket.png";
import dailymotion from "../../assets/images/dailymotion.png";
import blogger from "../../assets/images/blogger.png";
import digg from "../../assets/images/digg.png";
import kickstarter from "../../assets/images/kickstarter.png";
import patreon from "../../assets/images/patreon.png";
import zendesk from "../../assets/images/zendesk.png";
import marvel from "../../assets/images/marvel.png";
import ok from "../../assets/images/ok.png";

const firstDrag = [
  // first
  {
    id: 1,
    project: "Poster illustation design",
    dueDate: "Nov 10, 2024",
    teamLogo: dropbox,
    avatar: avatar16,
    status: {
      label: "Pending",
      percentage: 71,
      color: "purple"
    },
    taskProgress: {
      completed: 13,
      total: 39,
    },
  },
  {
    id: 2,
    project: "Coffee detail page - Main Page",
    dueDate: "Jun 20, 2022",
    teamLogo: badoo,
    avatar: avatar20,
    status: {
      label: "Completed",
      percentage: 100,
      color: "success"
    },
    taskProgress: {
      completed: 74,
      total: 74,
    },
  },
  {
    id: 3,
    project: "Drinking bottle graphics",
    dueDate: "Jan 10, 2020",
    teamLogo: invision,
    multiperson: [avatar5, avatar7],
    addmember: 2,
    status: {
      label: "Rejected",
      percentage: 40,
      color: "danger"
    },
    taskProgress: {
      completed: 19,
      total: 49,
    },
  },
  // second
  {
    id: 4,
    project: "Company logo design",
    dueDate: "Feb 28, 2023",
    teamLogo: bitbucket,
    avatar: avatar17,
    status: {
      label: "Completed",
      percentage: 100,
      color: "success"
    },
    taskProgress: {
      completed: 18,
      total: 18,
    },
  },
  {
    id: 5,
    project: "Poster illustration design",
    dueDate: "Nov 10, 2024",
    teamLogo: dailymotion,
    avatar: avatar16,
    status: {
      label: "Review",
      percentage: 15,
      color: "warning"
    },
    taskProgress: {
      completed: 1,
      total: 10,
    },
  },
  //   third
  {
    id: 6,
    project: "Drinking bottle graphics",
    dueDate: "Jun 11, 2023",
    teamLogo: blogger,
    multiperson: [avatar13, avatar10],
    addmember: 3,
    status: {
      label: "In Progress",
      percentage: 64,
      color: "info"
    },
    taskProgress: {
      completed: 19,
      total: 29,
    },
  },
  {
    id: 7,
    project: "Poster illustation design",
    dueDate: "Nov 10, 2024",
    teamLogo: digg,
    avatar: avatar16,
    status: {
      label: "Pending",
      percentage: 71,
      color: "purple"
    },
    taskProgress: {
      completed: 13,
      total: 39,
    },
  },
  {
    id: 8,
    project: "Coffee detail page - Main Page",
    dueDate: "Jun 20, 2022",
    teamLogo: kickstarter,
    avatar: avatar20,
    status: {
      label: "Completed",
      percentage: 100,
      color: "success"
    },
    taskProgress: {
      completed: 74,
      total: 74,
    },
  },
  {
    id: 9,
    project: "Drinking bottle graphics",
    dueDate: "Jan 10, 2020",
    teamLogo: patreon,
    multiperson: [avatar5, avatar7],
    addmember: 2,
    status: {
      label: "Rejected",
      percentage: 40,
      color: "danger"
    },
    taskProgress: {
      completed: 19,
      total: 49,
    },
  },
  // forth
  {
    id: 10,
    project: "Company logo design",
    dueDate: "Feb 28, 2023",
    teamLogo: zendesk,
    avatar: avatar17,
    status: {
      label: "Completed",
      percentage: 100,
      color: "success"
    },
    taskProgress: {
      completed: 18,
      total: 18,
    },
  },
  {
    id: 11,
    project: "Drinking bottle graphics",
    dueDate: "Jun 11, 2023",
    teamLogo: marvel,
    multiperson: [avatar13, avatar10],
    addmember: 3,
    status: {
      label: "In Progress",
      percentage: 64,
      color: "info"
    },
    taskProgress: {
      completed: 19,
      total: 29,
    },
  },
  {
    id: 12,
    project: "Poster illustation design",
    dueDate: "Nov 10, 2024",
    teamLogo: ok,
    avatar: avatar16,
    status: {
      label: "Review",
      percentage: 15,
      color: "warning"
    },
    taskProgress: {
      completed: 1,
      total: 10,
    },
  },
];

export { firstDrag };
