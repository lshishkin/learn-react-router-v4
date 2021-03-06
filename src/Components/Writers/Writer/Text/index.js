import React, {Fragment} from 'react'

export default ({title,description,published}) =>
    <Fragment>
        <h4>{title}
            ({published})
        </h4>
        <p>
            {description?description:<i>No discription</i>}
            </p>
    </Fragment>
