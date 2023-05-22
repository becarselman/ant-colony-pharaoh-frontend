const {
  HomeOutlined,
  ProjectOutlined,
  TeamOutlined,
  WalletOutlined,
  SnippetsOutlined,
  AuditOutlined
} = require("@ant-design/icons");

const sidebarOptions = [
  {
    image: <HomeOutlined />,
    text: "Home",
    path: "/dashboard/home"
  },
  {
    image: <ProjectOutlined />,
    text: "Projects",
    path: "/dashboard/projects"
  },
  {
    image: <TeamOutlined />,
    text: "Employees",
    path: "/dashboard/employees"
  },
  {
    image: <WalletOutlined />,
    text: "Financial Overview",
    path: "/dashboard/financial"
  },
  {
    image: <SnippetsOutlined />,
    text: "Project Reporting",
    path: "/dashboard/reporting"
  },
  {
    image: <AuditOutlined />,
    text: "Invoicing",
    path: "/dashboard/invoicing"
  }
];

export default sidebarOptions
