import React from 'react';

export default function Alert(props) {
    const capitalize = (str) => {
        let lower = str.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (

        props.alert && <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>{capitalize(props.alert.type)}</strong> :  {props.alert.message}
            {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>

    );
}