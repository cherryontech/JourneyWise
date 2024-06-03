import { useWindowSize } from "../Hook/useWindowSize";

export const getBtnText = (language) => {
    const [windowSize] = useWindowSize()

    if (windowSize <= 480){
        switch(language) {
            case "English":
                return "En";
            case "Spanish":
                return "Es";
            case "French":
                return "Fr";
            default:
                return language;
        }
    } else {
        return language;
    }

    }






