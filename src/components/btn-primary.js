import "./css/button.css"

function ButtonPrimary({
    label,
    target
}) {

    return (
        <div>
        <button className="btn-primary" href={target}>{label}</button>
        </div>
    );
}



export default ButtonPrimary;