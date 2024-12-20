export const sidebarNavlinks = [
  {
    id: 1,
    mainLink: "Dashboard",
    subLink: [],
    status: "inactive",
    url: "/",
    icon: <i className="fa-solid fa-chart-line"></i>,
  },
  {
    id: 2,
    mainLink: "Student",
    icon: <i className="fa-solid fa-graduation-cap"></i>,
    subLink: [
      { id: 1, name: "Student List", status: "active", url: "/student-list" },
      { id: 2, name: "Student View", status: "", url: "/student-view" },
      { id: 3, name: "Student Add", status: "", url: "/student-add" },
      { id: 4, name: "Student Edit", status: "", url: "/student-edit" },
    ],
    status: "active",
  },
  {
    id: 3,
    mainLink: "Teacher",
    icon: <i className="fa-solid fa-chalkboard-user"></i>,
    subLink: [
      { id: 1, name: "Teacher List", status: "active", url: "/teacher-list" },
      { id: 2, name: "Teacher View", status: "", url: "/teacher-view" },
      { id: 3, name: "Teacher Add", status: "", url: "/teacher-add" },
      { id: 4, name: "Teacher Edit", status: "", url: "/teacher-edit" },
    ],
    status: "inactive",
  },
  {
    id: 4,
    mainLink: "Attendance",
    icon: <i className="fa-solid fa-clipboard-user"></i>,
    subLink: [
      {
        id: 1,
        name: "Attendance List",
        status: "active",
        url: "/attendance-list",
      },
      { id: 2, name: "Attendance View", status: "", url: "/attendance-view" },
      { id: 3, name: "Attendance Add", status: "", url: "/attendance-add" },
      // { id: 4, name: "Teacher Edit", status: "", url: "/teacher-edit" },
    ],
    status: "inactive",
  },
  {
    id: 5,
    mainLink: "Parents",
    icon: <i className="fa-solid fa-user-group"></i>,
    subLink: [
      { id: 1, name: "Parents List", status: "active", url: "/parents-list" },
      { id: 2, name: "Parents View", status: "", url: "/parents-view" },
      { id: 3, name: "Parents Add", status: "", url: "/parents-add" },
      // { id: 4, name: "Parents Edit", status: "", url: "/parents-edit" },
    ],
    status: "inactive",
  },
  {
    id: 6,
    mainLink: "Time Table",
    icon: <i className="fa-sharp fa-solid fa-calendar-week"></i>,
    subLink: [],
    url: "/time-table",
    status: "inactive",
  },
  {
    id: 7,
    mainLink: "Invoice",
    icon: <i className="fa-solid fa-file-invoice"></i>,
    subLink: [],
    status: "inactive",
  },

  {
    id: 8,
    mainLink: "Hostel",
    icon: <i className="fa-solid fa-hotel"></i>,
    subLink: [],
    status: "inactive",
  },
  {
    id: 9,
    mainLink: "Mark List",
    icon: <i className="fa-solid fa-file-invoice"></i>,
    subLink: [],
    status: "inactive",
  },
  {
    id: 10,
    mainLink: "Transport",
    icon: <i className="fa-solid fa-bus-simple"></i>,
    subLink: [],
    status: "inactive",
  },
  {
    id: 11,
    mainLink: "Admission",
    icon: <i className="fa-solid fa-id-card"></i>,
    subLink: [],
    status: "inactive",
  },
  {
    id: 12,
    mainLink: "HR",
    icon: <i className="fa-solid fa-users"></i>,
    subLink: [],
    status: "inactive",
  },
  {
    id: 13,
    mainLink: "Class",
    url: "/class-add",
    icon: <i class="fa-solid fa-file-invoice"></i>,
    subLink: [],
    status: "inactive",
  },
];