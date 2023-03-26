export const validateText = (value: string | undefined) => {
  if (!value) return false;
  return value?.length >= 3 && /^[A-Za-z]*$/.test(value[0]);
};

export const validateImage = (name: string | undefined) => {
  if (!name) return false;
  return new RegExp(/\.(jpe?g|png|gif|svg|webp)/i).test(name);
};

export const validateDate = (value: string | undefined) => {
  if (!value) return false;
  const now = new Date(Date.now());
  return new Date(value) < now;
};
