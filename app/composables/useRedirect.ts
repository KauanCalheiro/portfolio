export const useRedirect = (url: string, newTab = false) => {
    if (newTab) {
        return window.open(url, "_blank");
    }

    return window.location.href = url;
};