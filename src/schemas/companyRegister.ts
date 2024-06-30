import * as yup from "yup";

export const companyRegisterSchema = yup.object({
  companyName: yup.string().required("O campo nome da empresa é obrigatório!"),
  fantasyName: yup.string().required("O campo nome fantasia é obrigatório!"),
  socialReason: yup.string().required("O campo razão social é obrigatório!"),
  cnpj: yup.string().required("O campo CNPJ é obrigatório!"),
  uf: yup.string().required("O campo UF é obrigatório!"),
  city: yup.string().required("O campo cidade é obrigatório!"),
});
