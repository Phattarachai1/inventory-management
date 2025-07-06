"use client";
import React, { use, useEffect } from "react";
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";
import { setIsSidebarCollapsed } from "@/state";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const IsSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const IsDarkMode = useAppSelector((state) => state.global.isDarkmode);

  useEffect(() => {
    if (IsDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  });
  return (
    <div
      className={`${IsDarkMode ? "dark" : "light"} flex bg-gray-50 text-gray-900 w-full min-h-screen`}
    >
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${IsSidebarCollapsed ? "md:pl-24" : "md:pl-72"}`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};
// const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="light flex bg-gray-50 text-gray-900 w-full min-h-screen">
//       {/* Sidebar - Placeholder as seen in the image */}
//       Sidebar
//       <main className="flex flex-col w-full h-full py-7 px-9 bg-gray-200">
//         {children}
//       </main>
//     </div>
//   );
// };

export default DashboardWrapper;
