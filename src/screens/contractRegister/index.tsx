import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { companyRegisterSchema } from "@/schemas/companyRegister";
import { InputControlled } from "@/components/controlledInput";
import Link from "next/link";

import Button from "@/components/button";
import { DatepickerControlled } from "@/components/datepicker";
import { useEffect } from "react";
import { contractRegisterSchema } from "@/schemas/contractRegister";

export default function ContractRegisterScreen() {
  const {
    handleSubmit,
    control,
    formState: { errors, dirtyFields },
    getValues,
  } = useForm({
    resolver: yupResolver(contractRegisterSchema),
  });

  useEffect(() => {
    console.log(getValues());
  }, [dirtyFields, errors]);
  const onSubmit = (data: any) => console.log(getValues());
  return (
    <div className="p-4 px-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-gray-dark text-xl font-semibold">Empresas</p>
          <span className="text-slate-dark text-sm">
            {"Empresas > Novo cadastro"}
          </span>
        </div>
      </div>
      <div className="w-full">
        <div className="flex ">
          <Link href="/dashboard/empresas/cadastro">
            <div className="px-8 py-2  mr-2  bg-slate-medium rounded-t-md drop-shadow-md	">
              <p className="text-gray-dark font-semibold text-sm">Empresa</p>
            </div>
          </Link>
          <Link href="/dashboard/empresas/cadastro/contrato">
            <div className="px-8 py-2  rounded-t-md drop-shadow-md bg-white">
              <p className="text-gray-dark font-semibold text-sm">Contrato</p>
            </div>
          </Link>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-4 bg-white rounded-b-lg drop-shadow-md	">
            <p className="text-gray-dark border-b border-slate-medium pb-2 font-semibold text-sm mb-4">
              Dados cadastrais
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="col-span-1">
                <DatepickerControlled
                  control={control}
                  label="Data de vigência do contrato*"
                  placeholder="dd/mm/aaaa"
                  name="vigencyDate"
                  error={errors?.vigencyDate?.message}
                />
              </div>
              <div className="col-span-1">
                <DatepickerControlled
                  control={control}
                  label="Data de assinatura*"
                  placeholder="dd/mm/aaaa"
                  name="signatureDate"
                  error={errors?.signatureDate?.message}
                />
              </div>
              <div className="col-span-2">
                <InputControlled
                  control={control}
                  type="text"
                  label="Taxa*"
                  placeholder="Digite o valor"
                  name="tax"
                  error={errors?.tax?.message}
                />
              </div>
            </div>
            <p className="text-gray-dark text-xl my-4">Serviços contratados</p>

            <div className="w-full border rounded-lg border-gray-default p-4 overflow-y-auto h-60">
              <div>
                <p className="text-gray-dark text-xl font-semibold my-4">
                  departamento A
                </p>
                <div className="flex items-center mb-2">
                  <input
                    disabled
                    id="disabled-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="disabled-checkbox"
                    className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                  >
                    Selecionar tudo
                  </label>
                </div>
                <div className="flex items-center  mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <label
                    htmlFor="checked-checkbox  mb-2"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Compra
                  </label>
                </div>
                <div className="flex items-center  mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <label
                    htmlFor="checked-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Venda
                  </label>
                </div>
                <div className="flex items-center  mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <label
                    htmlFor="checked-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    troca
                  </label>
                </div>
              </div>
              <div>
                <p className="text-gray-dark text-xl font-semibold my-4">
                  departamento B
                </p>
                <div className="flex items-center mb-2">
                  <input
                    disabled
                    id="disabled-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="disabled-checkbox"
                    className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                  >
                    Selecionar tudo
                  </label>
                </div>
                <div className="flex items-center  mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <label
                    htmlFor="checked-checkbox  mb-2"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Compra
                  </label>
                </div>
                <div className="flex items-center  mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <label
                    htmlFor="checked-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Venda
                  </label>
                </div>
                <div className="flex items-center  mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <label
                    htmlFor="checked-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    troca
                  </label>
                </div>
              </div>
              <div>
                <p className="text-gray-dark text-xl font-semibold my-4">
                  departamento C
                </p>
                <div className="flex items-center mb-2">
                  <input
                    disabled
                    id="disabled-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="disabled-checkbox"
                    className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
                  >
                    Selecionar tudo
                  </label>
                </div>
                <div className="flex items-center  mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <label
                    htmlFor="checked-checkbox  mb-2"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Compra
                  </label>
                </div>
                <div className="flex items-center  mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <label
                    htmlFor="checked-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Venda
                  </label>
                </div>
                <div className="flex items-center  mb-2">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <label
                    htmlFor="checked-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    troca
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full text-center mt-4 p-4 bg-yellow-200 rounded-lg">
              <p className="text-yellow-800 font-semibold">
                Campos marcados com <span className="text-red-600">*</span> são
                obrigatórios, preencha todos os campos para que o botão{" "}
                {'"CONTINUAR"'} abaixo seja liberado
              </p>
            </div>
          </div>

          <div className="w-full end mt-5">
            <div className="flex justify-end">
              <Button className="mr-4 bg-slate-medium text-gray-default font-semibold">
                Cancelar
              </Button>
              <Button
                type="submit"
                className="mr-4 bg-slate-dark text-slate-default font-semibold"
              >
                Continuar
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
