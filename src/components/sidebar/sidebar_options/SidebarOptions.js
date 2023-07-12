import { ReactComponent as Home } from "../../../images/sidebar/Home.svg"
import { ReactComponent as Employees } from "../../../images/sidebar/Employees.svg"
import { ReactComponent as Invoicing } from "../../../images/sidebar/Invoicing.svg"
import { ReactComponent as FinancialOverview } from "../../../images/sidebar/FinancialOverview.svg"
import { ReactComponent as ProjectReporting } from "../../../images/sidebar/ProjectReporting.svg"
import { ReactComponent as Projects } from "../../../images/sidebar/Projects.svg"

const sidebarOptions = [
  {
      image: <Home />,
      text: "Home"
  },
  {
      image: <Projects />,
      text: "Projects"
  },
  {
      image: <Employees />,
      text: "Employees"
  },
  {
      image: <FinancialOverview />,
      text: "Financial Overview",
      inactive: true
  },
  {
      image: <ProjectReporting />,
      text: "Project Reporting",
      inactive: true
  },
  {
      image: <Invoicing />,
      text: "Invoicing",
      inactive: true
  }
]



export default sidebarOptions