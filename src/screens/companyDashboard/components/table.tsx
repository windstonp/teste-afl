import { IoEyeOutline } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import { CiTrash } from "react-icons/ci";
import { themeColors } from "@/global/theme";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { PiArrowLineLeft } from "react-icons/pi";
import { PiArrowLineRight } from "react-icons/pi";

export function CompanyTable() {
  const mock = [
    {
      id: 1,
      name: "Empresa Alpha",
      cnpj: "12.345.678/0001-90",
      isActive: true,
    },
    {
      id: 2,
      name: "Empresa Beta",
      cnpj: "23.456.789/0001-01",
      isActive: false,
    },
    {
      id: 3,
      name: "Empresa Gama",
      cnpj: "34.567.890/0001-12",
      isActive: true,
    },
    {
      id: 4,
      name: "Empresa Delta",
      cnpj: "45.678.901/0001-23",
      isActive: true,
    },
    {
      id: 5,
      name: "Empresa Epsilon",
      cnpj: "56.789.012/0001-34",
      isActive: false,
    },
    {
      id: 6,
      name: "Empresa Zeta",
      cnpj: "67.890.123/0001-45",
      isActive: true,
    },
    {
      id: 7,
      name: "Empresa Eta",
      cnpj: "78.901.234/0001-56",
      isActive: false,
    },
    {
      id: 8,
      name: "Empresa Theta",
      cnpj: "89.012.345/0001-67",
      isActive: true,
    },
    {
      id: 9,
      name: "Empresa Iota",
      cnpj: "90.123.456/0001-78",
      isActive: false,
    },
    {
      id: 10,
      name: "Empresa Kappa",
      cnpj: "01.234.567/0001-89",
      isActive: true,
    },
  ];
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white font-bold uppercase bg-primary text-center">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nome
            </th>
            <th scope="col" className="px-6 py-3">
              CNPJ
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {mock.map((item) => {
            return (
              <tr
                key={item.id}
                className={` ${
                  item.isActive ? "bg-white odd:bg-snow" : "bg-slate-medium"
                } text-center `}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-dark whitespace-nowrap "
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.cnpj}</td>
                <td className="px-6 py-4">
                  {item.isActive ? "Ativo" : "Inativo"}
                </td>
                <td className="px-6 py-4 flex items-center justify-center">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <IoEyeOutline size={20} color={themeColors.gray.default} />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-8"
                  >
                    <BiEdit size={20} color={themeColors.gray.default} />
                  </a>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    <CiTrash size={20} color={themeColors.gray.default} />
                  </a>
                </td>
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
