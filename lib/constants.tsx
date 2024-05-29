import {
    LayoutDashboard,
    SquareGanttChart,
    LaptopMinimal,    
    Users,
    Settings,
    LogOut

  } from "lucide-react";
  
  export const navLinks=  {
  General:[
       {
      url: "/",
      icon: <LayoutDashboard />,
      label: "Dashboard",

    },
    {
      url: "/Jobs",
      icon: <SquareGanttChart />,
      label: "Job Status",
    },   
    {
      url: "/Equipments",
      icon: <LaptopMinimal />,
      label: "Equipments",
    },
    {
      url: "/Users",
      icon: <Users />,
      label: "Users",
    },
  ],  

  Setting:[  
  {
    url: "/Setting",
    icon: <Settings />,
    label: "Setting",

  },
  {
    url: "/Sign Out",
    icon: <LogOut />,
    label: "Sign Out",
  },     
],  
}



