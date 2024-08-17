import ButtonStyling from "./getButtonStyleType";

function Button({buttontype,text,styleType}){
    return (   
        <button
            type = {buttontype}
            className={`px-4 py-2 ${ButtonStyling(styleType)} text-white rounded-md transition-all`}
        >

            {text}
        </button>
    );
}

export default Button;