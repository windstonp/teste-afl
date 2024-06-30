import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import Button from "@/components/button";
import Input from "@/components/input";
import { CompanyTable } from "./components/table";

export default function CompanyDashboardScreen() {
  return (
    <div className="p-4 px-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-gray-dark text-xl font-semibold">Empresas</p>
          <span className="text-slate-dark text-sm">
            {"Empresas > listagem"}
          </span>
        </div>
        <Link href="/dashboard/empresas/cadastro">
          <Button variant="primary">Novo Cadastro</Button>
        </Link>
      </div>
      <div className="w-full">
        <div className="m-auto">
          <Input
            variant="endIcon"
            placeholder="Buscar por Nome ou CNPJ"
            endIcon={IoIosSearch}
            endIconFunction={() => {}}
          />
        </div>
        <CompanyTable />
      </div>
    </div>
  );
}
