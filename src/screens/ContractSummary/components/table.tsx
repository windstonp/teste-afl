import { themeColors } from "@/global/theme";
import { formatDate } from "@/utils";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { PiArrowLineLeft } from "react-icons/pi";
import { PiArrowLineRight } from "react-icons/pi";

export function ContractTable() {
  const mockData = [
    {
      id: 1,
      client: "Empresa ABC",
      effectiveDate: "2024-01-01",
      signatureDate: "2023-12-01",
      value: "2%",
      department: "Financeiro",
    },
    {
      id: 2,
      client: "Empresa XYZ",
      effectiveDate: "2024-02-01",
      signatureDate: "2024-01-15",
      value: "5%",
      department: "Jurídico",
    },
    {
      id: 3,
      client: "Empresa DEF",
      effectiveDate: "2024-03-01",
      signatureDate: "2024-02-20",
      value: "3%",
      department: "Indiretos",
    },
    {
      id: 4,
      client: "Empresa GHI",
      effectiveDate: "2024-04-01",
      signatureDate: "2024-03-25",
      value: "4%",
      department: "Financeiro",
    },
    {
      id: 5,
      client: "Empresa JKL",
      effectiveDate: "2024-05-01",
      signatureDate: "2024-04-10",
      value: "6%",
      department: "Jurídico",
    },
  ];
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white font-bold uppercase bg-primary text-center">
          <tr>
            <th scope="col" className="px-6 py-3">
              Cliente
            </th>
            <th scope="col" className="px-6 py-3">
              Data de Vigência
            </th>
            <th scope="col" className="px-6 py-3">
              Data Assinatura
            </th>
            <th scope="col" className="px-6 py-3">
              Valor
            </th>
            <th scope="col" className="px-6 py-3">
              Departamento
            </th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((item) => {
            return (
              <tr key={item.id} className="bg-white odd:bg-snow text-center ">
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-dark whitespace-nowrap "
                >
                  {item.client}
                </td>
                <td className="px-6 py-4">
                  {formatDate(new Date(item.effectiveDate))}
                </td>
                <td className="px-6 py-4">
                  {formatDate(new Date(item.signatureDate))}
                </td>
                <td className="px-6 py-4">{item.value}</td>
                <td className="px-6 py-4">{item.department}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="p-4">
        <form className="flex items-center justify-end">
          <p className="mr-2">itens por página</p>
          <label htmlFor="underline_select" className="sr-only">
            Underline select
          </label>
          <select
            defaultValue="10"
            id="underline_select"
            className="block py-1 px-0 text-sm  bg-transparent border-0 border-b-2 border-gray-200 peer"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
          <p className="mx-8">1-10 de 44</p>
          <div className="flex items-center">
            <div className="mx-2">
              <PiArrowLineLeft size={20} color={themeColors.secondary} />
            </div>
            <div className="mx-2">
              <IoIosArrowBack size={20} color={themeColors.secondary} />
            </div>
            <div className="mx-2">
              <IoIosArrowForward size={20} color={themeColors.primary} />
            </div>
            <div className="mx-2">
              <PiArrowLineRight size={20} color={themeColors.primary} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
