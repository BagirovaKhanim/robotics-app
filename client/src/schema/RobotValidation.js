import * as Yup from "yup";
export const RobotValidation = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string().required(),
  imageURL: Yup.string().required(),
  price:Yup.number().integer().required()
});
