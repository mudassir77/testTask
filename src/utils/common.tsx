/* eslint-disable @typescript-eslint/no-explicit-any */
export const validateAge = (dob: string) => {
  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate()))
    age--;
  return age;
};

export const formatDate = (dateString: string) => {
  if (dateString) dateString = dateString.split('T')[0];
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options as any);
};
