import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaGem } from "react-icons/fa";
import sidebarBg from "../../assets/bg2.jpg";
import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import "./SideBar.scss";
import "./Admin.scss";
import { Link } from "react-router-dom";

const MySideBar = ({ image, collapsed, toggled, handleToggleSidebar }) => {
  return (
    <Sidebar
      image={sidebarBg}
      backgroundColor="rgba(0, 0, 0, 0.1)"
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <div className="pro-sidebar">
        <div className="pro-sidebar-header">
          <DiReact size={"3em"} color={"00bfff"} />
          <span>Admin Here</span>
        </div>

        <div className="pro-sidebar-content">
          <Menu
            //iconShape="circle"
            menuItemStyles={{
              button: {
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                },
              },
            }}
          >
            <MenuItem icon={<MdDashboard />} component={<Link to="admins" />}>
              Dashboard
            </MenuItem>
          </Menu>
          <Menu
            //iconShape="circle"
            menuItemStyles={{
              button: {
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                },
              },
              subMenuContent: {
                backgroundColor: "rgba(0, 0, 0, 0.3)",
              },
            }}
          >
            <SubMenu icon={<FaGem />} title="Features">
              <MenuItem component={<Link to="manage-users" />}>
                Manage Users
              </MenuItem>
              <MenuItem> 2</MenuItem>
              <MenuItem> 3</MenuItem>
            </SubMenu>
          </Menu>
        </div>

        <div className="pro-sidebar-footer">
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
              textAlign: "center",
            }}
          >
            <a
              href="https://github.com/DungxLas"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                &#169; DungxLas
              </span>
            </a>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default MySideBar;
