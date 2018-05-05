

export interface PingBackRequestConfig {

    /** URL to get */
    target: string;

    /** Wordpress information */
    source: {
        /** URL to an article on the wordpress */
        article: string;

        /** XML RPC host. */
        xmlRpcHost: string;

        /** Port to address the XML RPC request */
        xmlPort?: number;

        /** XML RPC path. default: '/xmlrpc.php' */
        xmlRpcPath?: string;
    }
}