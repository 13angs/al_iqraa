import React from 'react';
import * as signalR from '@microsoft/signalr';


export default function useBlog() {
    const [blog, setBlog] = React.useState({
        connection: null
    })
    const hubName = process.env.HUB_NAME;
    const host = process.env.HOST;

    const connectToSignalR = React.useCallback(() => {
        const connection = new signalR.HubConnectionBuilder().withUrl(`${host}/${hubName}`).build();

        connection.start().then(() => {
            // console.log('connected')

            // if connected then set the signalR
            // setCon(connection);
            setBlog(prev => ({
                ...prev,
                connection
            }))

        }).catch(err => {
            console.log(err)
        })
    }, [setBlog]);

    // initialize the signalR and set to the state
    React.useEffect(() => {
        connectToSignalR();
    }, [connectToSignalR]);


    return {
        connection: blog.connection
    }
}