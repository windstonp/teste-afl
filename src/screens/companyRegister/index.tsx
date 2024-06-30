import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { companyRegisterSchema } from "@/schemas/companyRegister";
import { InputControlled } from "@/components/controlledInput";
import Link from "next/link";

import Button from "@/components/button";
import { FileComponent } from "@/components/fileInput";

export default function CompanyRegisterScreen() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(companyRegisterSchema),
  });

  const onSubmit = (data: any) => console.log(data);
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
            <div className="px-8 py-2  mr-2 bg-white rounded-t-md drop-shadow-md	">
              <p className="text-gray-dark font-semibold text-sm">Empresa</p>
            </div>
          </Link>
          <Link href="/dashboard/empresas/cadastro/contrato">
            <div className="px-8 py-2  rounded-t-md drop-shadow-md bg-slate-medium">
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
                <InputControlled
                  control={control}
                  label="Apelido da empresa*"
                  placeholder="Digite o apelido da empresa"
                  name="companyName"
                  type="text"
                  error={errors?.companyName?.message}
                />
              </div>
              <div className="col-span-1">
                <InputControlled
                  control={control}
                  label="Nome fantasia*"
                  placeholder="Digite o nome fantasia"
                  name="fantasyName"
                  type="text"
                  error={errors?.fantasyName?.message}
                />
              </div>
              <div className="col-span-1">
                <InputControlled
                  control={control}
                  label="Razão Social*"
                  placeholder="Digite a razão social"
                  name="socialReason"
                  type="text"
                  error={errors?.socialReason?.message}
                />
              </div>
              <div className="col-span-1">
                <InputControlled
                  control={control}
                  label="CNPJ*"
                  placeholder="00.000.000/0000-00"
                  name="cnpj"
                  type="text"
                  error={errors?.cnpj?.message}
                />
              </div>
              <div className="col-span-1">
                <InputControlled
                  control={control}
                  label="UF*"
                  placeholder="Digite o nome da UF"
                  name="uf"
                  type="text"
                  error={errors?.uf?.message}
                />
              </div>
              <div className="col-span-1">
                <InputControlled
                  control={control}
                  label="Cidade*"
                  placeholder="Digite o nome da cidade"
                  name="city"
                  type="text"
                  error={errors?.city?.message}
                />
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
          <div className="p-4 mt-4 bg-white rounded-b-lg drop-shadow-md	">
            <p className="text-gray-dark font-semibold text-sm">
              Logo da empresa
            </p>
            <FileComponent />
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
