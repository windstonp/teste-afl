import Button from "@/components/button";
import { themeColors } from "@/global/theme";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { FiUser } from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoExtensionPuzzleOutline } from "react-icons/io5";

type DashboardLayoutProps = {
  children: ReactNode;
};
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();

  return (
    <div className="flex">
      <div className="bg-white min-h-screen p-4 border-r-2 border-gray-light">
        <Image
          src="/logo.png"
          width={300}
          height={300}
          alt="Company Logo"
          className="mt-12"
        />
        <div className="mt-4">
          <Button
            startIcon={IoExtensionPuzzleOutline}
            variant={router.pathname === "/dashboard" ? "primary" : "outline"}
            asChild
          >
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </div>
        <div className="mt-4">
          <Button
            startIcon={HiOutlineBuildingOffice2}
            variant={router.pathname !== "/dashboard" ? "primary" : "outline"}
            asChild
          >
            <Link href="/dashboard/empresas">Empresas</Link>
          </Button>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full bg-slate flex items-center justify-end p-6 end border-b-2 border-gray-light">
          <div className="bg-secondary p-4  rounded-full">
            <FiUser color={themeColors.white} size={20} />
          </div>
        </div>
        <div className="bg-slate-light">{children}</div>
      </div>
    </div>
  );
}
