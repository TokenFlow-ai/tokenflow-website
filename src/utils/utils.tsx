export const copyToClipboard = (text: string): void => {
  navigator.clipboard.writeText(text);
};

export const getYear = (): number => {
  return new Date().getFullYear();
};
