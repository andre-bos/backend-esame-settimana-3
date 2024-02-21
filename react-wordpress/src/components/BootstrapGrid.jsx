import React from 'react';
import {Row} from "react-bootstrap";

function BootstrapGrid(props) {
    return (
        <Row xs={1} md={2} className="g-4">
            {props.children}
        </Row>
    );
}

export default BootstrapGrid;