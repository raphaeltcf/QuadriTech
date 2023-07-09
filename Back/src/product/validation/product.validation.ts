import * as yup from 'yup';

export const createProductSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required().min(10),
  price: yup.number().required(),
  category: yup.string().required(),
  quantity: yup.number().required().integer(),
  imageUrl: yup.string().required(),
});
