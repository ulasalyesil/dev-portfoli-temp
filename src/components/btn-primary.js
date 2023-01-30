import "./css/button.css"



function Button({
    label,
    target,
    type
}) {

    const handleClick = () => {
        window.location.href=target;
    }

    return (
        <div>
        <button className={`${type}`} onClick={handleClick}>{label}</button>
        </div>
    );
}



export default Button;