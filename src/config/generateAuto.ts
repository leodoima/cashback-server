export function generateCodeCards(): number {
  const min = Math.ceil(10000000);
  const max = Math.floor(99999999);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function generateCodeTransfers(): string {
  const randomChars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const length = 6;

  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length),
    );
  }

  return result.toUpperCase();
}

export default { generateCodeCards, generateCodeTransfers };
