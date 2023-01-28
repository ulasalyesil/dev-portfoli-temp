import "./css/button.css"

function ButtonSecondary({
    label,
    target
}) {

    return (
        <div>
        <button className="btn-secondary" href={target}>{label}</button>
        </div>
    );
}



export default ButtonSecondary;