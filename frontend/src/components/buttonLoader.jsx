import React from "react";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


const ButtonLoader = (props) => {
    return (
        <div>
            <Button color="primary" size="lg" block outline onClick={props.onEvent} disabled={props.loading} type='submit'>
                {props.loading && (
                    <div className="fa fa-refresh fa-spin">
                        <FontAwesomeIcon icon={faSpinner} size="1x" />
                    </div>
                )}
                {!props.loading && <span>{props.text}</span>}
            </Button>
        </div>
    );
};
export default ButtonLoader;

