import { ContractCard } from "./components/card";
import { ContractTable } from "./components/table";
import { CiDollar } from "react-icons/ci";
import { BsGraphUp } from "react-icons/bs";
import { PiCirclesFour } from "react-icons/pi";

export function ContractSummaryScreen() {
  return (
    <div className="container p-4 px-8 bg-slate-light">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-gray-dark text-xl font-semibold">Dashboard</p>
          <span className="text-slate-dark text-sm">
            {"Dashboard > Resumo dos Contratos"}
          </span>
        </div>
      </div>
      <div className="p-8 bg-white w-1/6 rounded-t-md drop-shadow-md	">
        <p className="text-gray-dark font-semibold text-sm">Resumo Executivo</p>
      </div>
      <div className="p-4 bg-white rounded-t-sm drop-shadow-md	">
        <p className="text-slate-dark font-semibold text-sm mb-4">
          Métricas dos contratos
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          <div className="col-span-1">
            <ContractCard title="Valor" value="2.9 Mi" cardIcon={CiDollar} />
          </div>
          <div className="col-span-1">
            <ContractCard
              title="Meta Financeira"
              value="3.4 M"
              cardIcon={BsGraphUp}
              hasBadge
              isBadgePositive
              badgeValue="85%"
            />
          </div>
          <div className="col-span-1">
            <ContractCard
              title="Quantidade"
              value="07"
              cardIcon={PiCirclesFour}
            />
          </div>
          <div className="col-span-1">
            <ContractCard
              title="Meta Qtde"
              value="10"
              cardIcon={BsGraphUp}
              hasBadge
              isBadgePositive={false}
              badgeValue="70%"
            />
          </div>
        </div>

        <ContractTable />
      </div>
    </div>
  );
}
