import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";
import { menuItems } from "../../../constants/sidebar.constant";
import { LogOut } from "lucide-react";
import { useUserContext } from "../../../context/auth.provider";

const Sidebar = ({ collapsed }: { collapsed: boolean }) => {
  const { handleLogout } = useUserContext();
  return (
    <div>
      <Sider
        className="dashboardSidebar dark:dashboardSidebarDark"
        style={{
          position: "sticky",
          top: "0",
          left: "0",
          height: "100vh",
          zIndex: 99,
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="p-4">
          <Link href={`/admin/projects`} className="inline-block">
            <h3
              className={`${
                collapsed ? "text-base" : "text-[22px]"
              } font-bold uppercase text-primaryColor`}
            >
              <span className="text-accent">Noman</span>
            </h3>
          </Link>
        </div>
        <Menu
          className="bg-white dark:bg-primaryColor dark:dark-mode px-3 dashMenuItems"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
        <div className="mt-2 bg-gray-200 w-full h-[1px]" />
        <Menu
          className="bg-white px-3 logoutItem"
          mode="inline"
          items={[
            {
              onClick: () => handleLogout(),
              key: "logout",
              icon: <LogOut color={"red"} className="text-red-600" size={14} />,
              label: <span className="text-red-600">Logout</span>,
            },
          ]}
        />
      </Sider>
    </div>
  );
};

export default Sidebar;
