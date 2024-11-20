import bcrypt from "bcrypt";

export  const encriptarPassword = async (password) => {
  const saltRounds = 10; // Ajusta la complejidad
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

export const verificarPassword = async (password, hashedPassword) => {
  const esCorrecto = await bcrypt.compare(password, hashedPassword);
  return esCorrecto;
};