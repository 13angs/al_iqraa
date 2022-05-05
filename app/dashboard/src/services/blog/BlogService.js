import Axios from '../dataFetching/Axios';

export default class BlogService {
    version = 'api/v1';
    action = 'blogs';

    getBlogs(url, { action, status }) {

        if (action || status)
            return Axios.get(`${this.version}/${url}?action=${action}&status=${status}`);
        return Axios.get(`${this.version}/${url}`);
    }


    // add new blog
    addBlog(data) {
        return Axios.post(`${this.version}/${this.action}`, data);
    }
}