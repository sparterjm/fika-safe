import type { Metadata } from "next";
import { DashboardNav } from "@/app/Components/DashboardNav";
import { UserNav } from "@/app/Components/ui/user-nav";
import { ThemeToggle } from "@/app/Components/ThemeToggle";
import { ThemeProvider } from "@/app/Components/ThemeProvider";

export const metadata: Metadata = {
  title: "FikaSafe - Safe Route Navigation",
  description:
    "FikaSafe provides pedestrians with the safest routes based on crime data, lighting, and real-time user feedback. It also includes emergency assistance features and danger alerts.",
};

export default async function FikaSafeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      {/* Root container with minimum height of the viewport and vertical flex layout */}
      <div className="min-h-screen flex flex-col">
        {/* Header with User Navigation and Theme Toggle */}
        <header className="border-b bg-white shadow-md p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">FikaSafe</h1>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <UserNav />
          </div>
        </header>

        {/* Main Layout with Sidebar and Content */}
        <div className="flex flex-1">
          <DashboardNav />
          <main className="flex-1 p-4">
            {/* Emergency Assistance Section */}
            <div className="bg-red-100 p-4 rounded-md shadow-md mb-4">
              <h2 className="text-lg font-semibold">Emergency Assistance</h2>
              <p>If you are in danger, use the emergency contacts below.</p>
              <div className="flex space-x-4 mt-2">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                  aria-label="Call Police"
                >
                  Call Police
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  aria-label="Call Hospital"
                >
                  Call Hospital
                </button>
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                  aria-label="Call Registered Uber"
                >
                  Call Registered Uber
                </button>
              </div>
            </div>

            {/* Dynamic Page Content */}
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
