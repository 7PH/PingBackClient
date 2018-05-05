# PingBackClient

Send synchronized pingback requests, to ensure pingback requests are processed at a specific time by the server.

This can be useful if you want multiple wordpress servers to process a pingback request at exactly one moment..

## Example

```typescript

// build configuration object for synchronized requests
const config: SyncRequestConfig = PingBack.getRequestConfig({
    /** url that will be fetched by the wordpress */
    target: 'https://target.com',

    /** wordpress informations */
    source: {
        /** link to an article */
        article: 'http://the-wordpress.fr/2018-06-12/an-article/',

        /** host on which to contact the xml rpc gate (default xmlrpc file: `http://${xmlRpcHost}/xmlrpc.php`) */
        xmlRpcHost: 'the-wordpress.fr'
    }
});

// nb of requests to make
const N: number = 10;

(async () => {
    // build requests objects
    let requests: SyncRequests = new SyncRequests();
    for (let i = 0; i < N; ++ i)
        requests.addRequest(config);

    // start pingback requests
    await requests.start();

    // terminate pingback requests
    await requests.terminate();
})();
```