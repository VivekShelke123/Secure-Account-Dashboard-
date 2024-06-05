import type { Metadata } from "next";
import DashHeader from "./DashHeader";

export const metadata: Metadata = {
  title: "UserDashboard",
  description: "User manages his data ",
};

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <aside><DashHeader/></aside>
      <main className="min-h-[60vh]">{children}</main>
    </div>
  );
}
