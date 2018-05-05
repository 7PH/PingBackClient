import {PingBack} from "./pingbackclient/PingBack";
import {SyncRequests, SyncRequestConfig} from "sync-requests";

const config: SyncRequestConfig = PingBack.getRequestConfig({
    /** url that will be fetched by the wordpress */
    target: 'https://target.com',

    /** wordpress informations */
    source: {
        /** link to an article */
        article: 'http://the-wordpress.fr/2018-06-12/an-article/',

        /** host on which to contact the xml rpc gate (default: `http://${xmlRpcHost}/xmlrpc.php`) */
        xmlRpcHost: 'the-wordpress.fr'
    }
});

async function main() {
    // build requests objects
    let requests: SyncRequests = new SyncRequests();
    for (let i = 0; i < 10; ++ i)
        requests.addRequest(config);

    // start pingback requests
    await requests.start();

    // terminate pingback requests
    await requests.terminate();
}


main();