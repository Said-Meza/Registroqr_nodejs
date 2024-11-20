
import Joi from "joi";

const schema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages({
      "string.empty": "El nombre no puede estar vacío.",
      "string.min": "El nombre debe tener al menos 3 caracteres.",
      "any.required": "El campo 'name' es obligatorio.",
    }),
  tel: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .message({
      "string.empty": "El teléfono no puede estar vacío.",
      "string.pattern.base": "El teléfono debe tener 10 dígitos numéricos.",
      "any.required": "El campo 'tel' es obligatorio.",
    }),
  correo: Joi.string().email().required().messages({
    "string.empty": "El correo no puede estar vacío.",
    "string.email": "El correo debe ser una dirección válida.",
    "any.required": "El campo 'correo' es obligatorio.",
  }),
  carrera: Joi.string().min(5).max(50).required().messages({
    "string.empty": "La carrera no puede estar vacía.",
    "string.min": "La carrera debe tener al menos 3 caracteres.",
    "any.required": "El campo 'carrera' es obligatorio.",
  }),
  matricula: Joi.string().alphanum().min(10).max(15).required().messages({
    "string.empty": "La matrícula no puede estar vacía.",
    "string.alphanum":
      "La matrícula debe contener solo caracteres alfanuméricos.",
    "string.min": "La matrícula debe tener al menos 10 caracteres.",
    "any.required": "El campo 'matricula' es obligatorio.",
  }),
  semestre: Joi.number().integer().min(1).max(15).required().messages({
    "number.base": "El semestre debe ser un número.",
    "number.min": "El semestre debe ser al menos 1.",
    "number.max": "El semestre no puede ser mayor a 12.",
    "any.required": "El campo 'semestre' es obligatorio.",
  }),
});

export default schema