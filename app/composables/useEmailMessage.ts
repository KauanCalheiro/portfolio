export const useEmailMessage = (to: string, subject: string, message: string) => {
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    return mailtoLink;
};
