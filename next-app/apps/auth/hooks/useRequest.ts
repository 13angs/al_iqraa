import { useState } from 'react';
import axios from 'axios';

export default function useRequest(
    url: string,
    body?: object,
    method?: string,
    onSuccess?: (data: object) => void) {

    // assign array to it (because the api return array of errors from the response)
    const [errors, setErrors] = useState([]);

    const doRequest = async () => {
        try {
            const res = await axios[method](url, body);

            // set the response to the success callback
            if (onSuccess) {
                onSuccess(res.data);
            }
        } catch (err) {
            setErrors(prev => (err.response.data.errors));
        }
    }

    return { errors, doRequest, setErrors };
}