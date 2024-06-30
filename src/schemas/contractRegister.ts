import * as yup from "yup";

export const contractRegisterSchema = yup.object({
  vigencyDate: yup.string().required("O campo Data de vigência é obrigatório!"),
  signatureDate: yup
    .string()
    .required("O campo Data de assinatura é obrigatório!"),
  tax: yup.string().required("O campo Taxa é obrigatório!"),
});
