import { useWindowSize } from "../Hook/useWindowSize";

const languageMap = {
    English: { short: "EN", full: "English" }, 
    Spanish: { short: "ES", full: "Español" }, 
    French: { short: "FR", full: "Français" },
}

export const getBtnText = (language, windowSize) => {
    const isSmallScreen = windowSize <= 480; 
    const languageData = languageMap[language]; 

    return languageData ? (isSmallScreen ? languageData.short : languageData.full) : language;
    }






