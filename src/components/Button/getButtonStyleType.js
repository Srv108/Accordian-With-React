function ButtonStyling(styleType){

    const primaryButton = "bg-blue-500 border border-blue-700 hover:bg-blue-700 hover:border-blue-900"
    const secondaryButton = "bg-gray-500 border border-gray-700 hover:bg-gray-700 hover:border-gray-900";
    const warningButton = "bg-yellow-500 border border-yellow-700 hover:bg-yellow-600 hover:border-yellow-900";
    const errorButton = "bg-red-500 border border-red-700 hover:bg-red-600 hover:border-red-900";

    if(styleType === "primary"){
        return primaryButton;
    }else if(styleType === "secondary"){
        return secondaryButton;
    }else if(styleType === "warning"){
        return warningButton;
    }else if(styleType === "error"){
        return errorButton;
    }else{
        return primaryButton;
    }
}

export default ButtonStyling;