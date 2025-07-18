import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { Celda } from "./Celda";



export const MiContador = (props) => {

    return (
        <div className="d-flex text-white justify-content-center align-items-center vh-100">
            <div
                className="m-2 p-3 border border-2 border-dark rounded"
                style={{ fontSize: "50px", backgroundColor: "#0f0f0f" }}
            >
                <FontAwesomeIcon icon={faClock} />
            </div>
            <Celda text={props.numCienMil} />
            <Celda text={props.numDiezMil} />
            <Celda text={props.numMil} />
            <Celda text={props.numCentenas} />
            <Celda text={props.numDecenas} />
            <Celda text={props.numUnidades} />
        </div>
    );
};