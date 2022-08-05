import * as yup from "yup";

export const formSchema = yup.object().shape({
  email: yup.string().email().required("Email obrigatório"),
  password: yup
    .string()
    .min(8, "No mínimo 8 caracteres")
    .required("Senha obrigatória"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")])
    .min(8, "No mínimo 8 caracteres")
    .required("Deve ser igual a senha"),
  name: yup.string().required("Nome obrigatório"),
  bio: yup.string().required("Bio obrigatória"),
  contact: yup.string().required("Conato obrigatório"),
  course_module: yup.string().required("Módulo obrigatório"),
});

export const formSchemaLogin = yup.object().shape({
  email: yup.string().email().required("Email obrigatório"),
  password: yup
    .string()
    .min(8, "No mínimo 8 caracteres")
    .required("Senha obrigatória"),
});
