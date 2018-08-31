
import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

import './box.css'

export const Box = ({
    id,
    title
}) => {
    if (!title) return null;
  
    return (
        <div id={id} className='BoxItem'>
            {title}
        </div>
    )
}
Box.propTypes = {
    title: PropTypes.string.isRequired
}
