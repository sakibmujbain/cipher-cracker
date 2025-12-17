export const decodeBase64 = (input: string): string => {
  try {
    return atob(input);
  } catch (e) {
    throw new Error("Invalid Base64 string");
  }
};

export const decodeHex = (input: string): string => {
  // Remove spaces and newlines to get raw hex
  const cleanInput = input.replace(/\s+/g, '');
  if (cleanInput.length % 2 !== 0) throw new Error("Hex string must have an even length");
  
  let str = '';
  for (let i = 0; i < cleanInput.length; i += 2) {
    // Parse every 2 characters as a hex number (base 16)
    const charCode = parseInt(cleanInput.substr(i, 2), 16);
    if (isNaN(charCode)) throw new Error("Invalid Hex characters");
    str += String.fromCharCode(charCode);
  }
  return str;
};

export const decodeBinary = (input: string): string => {
  // Split by space or just every 8 characters
  const cleanInput = input.replace(/\s+/g, '');
  if (cleanInput.length % 8 !== 0) throw new Error("Binary string length must be a multiple of 8");

  let str = '';
  for (let i = 0; i < cleanInput.length; i += 8) {
    // Parse every 8 characters as a binary number (base 2)
    const charCode = parseInt(cleanInput.substr(i, 8), 2);
    if (isNaN(charCode)) throw new Error("Invalid Binary characters");
    str += String.fromCharCode(charCode);
  }
  return str;
};