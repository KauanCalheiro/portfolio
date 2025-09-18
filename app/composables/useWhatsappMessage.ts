export const useWhatsappMessage = (targetNumber: string, message: string): string => {
   const whatsappBaseUrl = "https://api.whatsapp.com/send";
   const encodedMessage = encodeURIComponent(message);
   return `${whatsappBaseUrl}?phone=${targetNumber}&text=${encodedMessage}`;
}