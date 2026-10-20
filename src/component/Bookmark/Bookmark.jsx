// import React from 'react';

import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title}=bookmark
    return (
        <div>
            <h3 className='text-3xl bg-slate-300 p-4 m-4 rounded-xl'>{title}</h3>

        </div>
    );
};

Bookmark.propTypes={
    bookmark: PropTypes.object
}

export default Bookmark;