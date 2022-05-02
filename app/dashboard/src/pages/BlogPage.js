import React from 'react';
import { DashboardBread } from '../components/Dashboard';

// icons
import BookIcon from '@mui/icons-material/Book';

function BlogPage() {
    return (
        <div>
            <DashboardBread
                title="Blog Edit"
                icon={<BookIcon />}
                menu1="Blog"
                menu2="Edit"
            />
            dfdf
        </div>
    )
}

export default BlogPage