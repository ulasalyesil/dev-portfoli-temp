import ButtonSecondary from "./btn-secondary.js";
import "./css/projects.css";

function Project({thumbnail, thumb_alt, title, description}) {
    return(
        <div className="project">
                <img src={thumbnail} alt={thumb_alt={}}></img>
                <div className="copy">
                <h3>{title}</h3>
                <p>{description}</p>
                <ButtonSecondary label="View Project"/>
                </div>
        </div>
        );
}

export default Project;