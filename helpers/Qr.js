import QRCode from "qrcode";

const CodeQr = async (text) => {
  try {
    const qr = await QRCode.toDataURL(text);
    return qr;
  } catch (err) {
    throw new Error("No se pudo generar el código QR.");
  }
};

export default CodeQr;
