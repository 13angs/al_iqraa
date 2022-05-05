import React from 'react';
import blogContext from '../blogContext';
import useBlog from '../hooks/useBlog';

function BlogProvider({ children }) {
    return (
        <blogContext.Provider value={useBlog()}>
            {children}
        </blogContext.Provider>
    )
}

export default BlogProvider