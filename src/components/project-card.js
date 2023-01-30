import Button from "./btn-primary";
import "./css/projects.css";

function Project({thumbnail, thumb_alt, title, description}) {
    return(
        <div className="project">
                <img src={thumbnail} alt={thumb_alt={}}></img>
                <div className="copy">
                <h3>{title}</h3>
                <p>{description}</p>
                <Button label="View Project" type="btn-secondary"/>
                </div>
        </div>
        );
}

export default Project;