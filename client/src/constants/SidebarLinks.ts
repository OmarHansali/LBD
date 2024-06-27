const sidebarData = [
  {
    label: "Menu",
    isTitle: true,
  },
  {
    id: "dashboard",
    label: "Dashboard",
    link: "/admin/dashboard",
    icon: "M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM15.8329 7.33748C16.0697 7.17128 16.3916 7.19926 16.5962 7.40381C16.8002 7.60784 16.8267 7.92955 16.6587 8.16418C14.479 11.2095 13.2796 12.8417 13.0607 13.0607C12.4749 13.6464 11.5251 13.6464 10.9393 13.0607C10.3536 12.4749 10.3536 11.5251 10.9393 10.9393C11.3126 10.5661 12.9438 9.36549 15.8329 7.33748ZM17.5 11C18.0523 11 18.5 11.4477 18.5 12C18.5 12.5523 18.0523 13 17.5 13C16.9477 13 16.5 12.5523 16.5 12C16.5 11.4477 16.9477 11 17.5 11ZM6.5 11C7.05228 11 7.5 11.4477 7.5 12C7.5 12.5523 7.05228 13 6.5 13C5.94772 13 5.5 12.5523 5.5 12C5.5 11.4477 5.94772 11 6.5 11ZM8.81802 7.40381C9.20854 7.79433 9.20854 8.4275 8.81802 8.81802C8.4275 9.20854 7.79433 9.20854 7.40381 8.81802C7.01328 8.4275 7.01328 7.79433 7.40381 7.40381C7.79433 7.01328 8.4275 7.01328 8.81802 7.40381ZM12 5.5C12.5523 5.5 13 5.94772 13 6.5C13 7.05228 12.5523 7.5 12 7.5C11.4477 7.5 11 7.05228 11 6.5C11 5.94772 11.4477 5.5 12 5.5Z",
  },
  {
    id: "utilisateurs",
    label: "Utilisateurs",
    link: "/admin/utilisateurs",
    icon: "M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z",
  },
  {
    id: "matériaux",
    label: "Matériels",
    link: "/admin/materiaux",
    icon: "M13 9H21L11 24V15H4L13 0V9ZM11 11V7.22063L7.53238 13H13V17.3944L17.263 11H11Z",
  },
  {
    id: "ressources",
    label: "Ressources",
    // link: "/admin/salles",
    icon: "M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM5.49388 7.0777L12.0001 10.8444L18.5062 7.07774L12 3.311L5.49388 7.0777ZM4.5 8.81329V16.3469L11.0001 20.1101V12.5765L4.5 8.81329ZM13.0001 20.11L19.5 16.3469V8.81337L13.0001 12.5765V20.11Z",
    subItems: [
      {
        id: "salle",
        label: "Salle",
        link: "/admin/salles",
        parentId: "element",
      },
      {
        id: "box",
        label: "Box",
        link: "/admin/boxes",
        parentId: "element",
      },
      {
        id: "fablab",
        label: "Fablab",
        link: "/admin/fablabs",
        parentId: "element",
      },
    ],
  },
  {
    id: "réservations",
    label: "Réservations",
    link: "/admin/reservations",
    icon: "M4 8H20V5H4V8ZM14 19V10H10V19H14ZM16 19H20V10H16V19ZM8 19V10H4V19H8ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3Z",
  },
  {
    id: "contact",
    label: "Contacts",
    link: "/admin/contacts",
    icon: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C13.4702 20 14.8478 19.6034 16.0316 18.9114L15.0237 17.1835C14.1359 17.7026 13.1027 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12V13C18 13.5523 17.5523 14 17 14C16.4477 14 16 13.5523 16 13V9H14.6458C13.9407 8.37764 13.0144 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C13.0465 16 13.9991 15.5982 14.7119 14.9404C15.2622 15.5886 16.0831 16 17 16C18.6569 16 20 14.6569 20 13V12ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z",
  },
];

export { sidebarData };
