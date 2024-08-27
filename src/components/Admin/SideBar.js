import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaGem } from "react-icons/fa";
import sidebarBg from "../../assets/bg2.jpg";
import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import "./SideBar.scss";
import "./Admin.scss";

const SideBar = ({ image, collapsed, toggled, handleToggleSidebar }) => {
  return (
    <>
      <Sidebar
        image={sidebarBg}
        backgroundColor="rgba(255, 0, 0, 0.1)"
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
        className="pro-sidebar"
      >
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          className="pro-sidebar-header"
        >
          <DiReact size={"3em"} color={"00bfff"} />
          <span>Admin Here</span>
        </div>
        <div className="pro-sidebar-content">
          <Menu iconShape="circle">
            <MenuItem icon={<MdDashboard />}>Dashboard</MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu icon={<FaGem />} title="Features">
              <MenuItem> 1</MenuItem>
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
      </Sidebar>
    </>
  );
};

export default SideBar;
