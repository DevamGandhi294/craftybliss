const WHATSAPP_NUMBER = "919664662140"; // Replace with actual number

export const getWhatsAppLink = (message?: string) => {
  const defaultMessage = "Hi Craftybliss, I'm interested in your handmade gifts!";
  const text = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};

export const getProductEnquiryLink = (productName: string) => {
  const message = `Hi Craftybliss, I'm interested in this product: ${productName}. Could you share more details?`;
  return getWhatsAppLink(message);
};
