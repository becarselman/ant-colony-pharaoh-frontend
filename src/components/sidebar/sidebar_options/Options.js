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
        text: "Home"
    },
    {
        image: <ProjectOutlined />,
        text: "Projects"
    },
    {
        image: <TeamOutlined />,
        text: "Employees"
    },
    {
        image: <WalletOutlined />,
        text: "Financial Overview"
    },
    {
        image: <SnippetsOutlined />,
        text: "Project Reporting"
    },
    {
        image: <AuditOutlined />,
        text: "Invoicing"
    }
]



export default sidebarOptions
