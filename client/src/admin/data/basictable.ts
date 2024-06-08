// image
import avatar12 from "../../assets/images/avatar-12.png"
import avatar13 from "../../assets/images/avatar-13.png"
import avatar14 from "../../assets/images/avatar-14.png"
import avatar15 from "../../assets/images/avatar-15.png"
import avatar16 from "../../assets/images/avatar-16.png"
import avatar17 from "../../assets/images/avatar-17.png"
import avatar18 from "../../assets/images/avatar-18.png"

const fullWidth = [
  {
    id: 1,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    role: "Member",
    roleColor: "bg-purple/20 text-purple",
  },
  {
    id: 2,
    name: "Courtney Henry",
    title: "Designer",
    role: "Admin",
    roleColor: "bg-success/20 text-success",
  },
  {
    id: 3,
    name: "Tom Cook",
    title: "Director of Product",
    role: "Member",
    roleColor: "bg-warning/20 text-warning",
  },
  {
    id: 4,
    name: "Whitney Francis",
    title: "Copywriter",
    role: "Admin",
    roleColor: "bg-danger/20 text-danger",
  },
  {
    id: 5,
    name: "Leonard Krasner",
    title: "Senior Designer",
    role: "Owner",
    roleColor: "bg-info/20 text-info",
  },
];

const iconcheckbox = [
  {
    id: 1,
    projectName: "Coffee detail page",
    assignedTo: [
      {
        id: 11,
        avatar: avatar12,
      },
    ],
    timeSpend: "3h 20min",
    color: "text-purple",
    label: "In Progress",
    check: true
  },
  {
    id: 2,
    projectName: "Drinking bottle graphics",
    assignedTo: [
      {
        id: 12,
        avatar: avatar13,
      },
      {
        id: 13,
        avatar: avatar14,
      },
    ],
    timeSpend: "12h 21min",
    color: "text-success",
    label: "Completed",
    check: false
  },
  {
    id: 3,
    projectName: "App design and development",
    assignedTo: [
      {
        id: 14,
        avatar: avatar15,
      },
      {
        id: 15,
        avatar: avatar16,
      },
      {
        id: 16,
        placeholder: "+3",
      },
    ],
    timeSpend: "78h 05min",
    color: "text-warning",
    label: "Pending",
    check: true
  },
  {
    id: 4,
    projectName: "Poster illustration design",
    assignedTo: [
      {
        id: 17,
        avatar: avatar17,
      },
    ],
    timeSpend: "26h 58min",
    color: "text-info",
    label: "Approved",
    check: false
  },
  {
    id: 5,
    projectName: "App UI design",
    assignedTo: [
      {
        id: 18,
        avatar: avatar18,
      },
    ],
    timeSpend: "17h 22min",
    color: "text-danger",
    label: "Rejected",
    check: false
  },
];

export { fullWidth, iconcheckbox };
