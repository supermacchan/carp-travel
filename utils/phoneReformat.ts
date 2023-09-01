export const reformatPhoneNumber = (phoneNumber: string): string => {
  // Remove any non-numeric characters from the input
  const numericOnly = phoneNumber.replace(/\D/g, '');
  
  // Extract the parts of the phone number
  const country = numericOnly.slice(0, 2);
  const operator = numericOnly.slice(2, 5);
  const rest = numericOnly.slice(5);
  
  // Format the phone number as +38 (###) ## ## ###
  const formattedNumber = `+${country} (${operator}) ${rest.slice(0, 2)} ${rest.slice(2, 4)} ${rest.slice(4)}`;
      
  return formattedNumber;
}
  