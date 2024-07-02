/* eslint-disable react/prop-types */
const Button = ({onClick, children, className}) => {
    return ( 
        <button className={`border-black cursor-pointer flex items-center gap-2 bg-blue-400 hover:bg-blue-600 text-white p-2 rounded [&>svg]:w-4 [&>svg]:h-4 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
 
export default Button;