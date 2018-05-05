import {SyncRequestConfig} from "sync-requests";
import {PingBackRequestConfig} from "./PingBackRequestConfig";

export class PingBack {

    /** Default xml rpc port on the remote wordpress server */
    public static readonly DEFAULT_XMLRPC_PORT: number = 80;

    /** Default xml rpc path on the remote wordpress server */
    public static readonly DEFAULT_XMLRPC_PATH = '/xmlrpc.php';

    /** Get the raw body to send to a wordpress
     * @param {string} target URL that the wordpress will ask for
     * @param {string} source Article link on the wordpress
     * @returns {string}
     */
    public static getRawBody(target: string, source: string): string {
        return "<methodCall>"
            + "<methodName>pingback.ping</methodName>"
            + "<params>"
            + "<param><value><string>" + target + "</string></value></param>"
            + "<param><value><string>" + source + "</string></value></param>"
            + "</params>"
            + "</methodCall>";
    }

    /**
     * Get the RequestConfig object from a PingBackRequestConfig
     * @param {PingBackRequestConfig} pingBackConfig PingBack informations
     * @returns {RequestConfig} Config object for ConcurrentRequest
     */
    public static getRequestConfig(pingBackConfig: PingBackRequestConfig): SyncRequestConfig {
        return {
            port: pingBackConfig.source.xmlPort || PingBack.DEFAULT_XMLRPC_PORT,
            host: pingBackConfig.source.xmlRpcHost,
            path: pingBackConfig.source.xmlRpcPath || PingBack.DEFAULT_XMLRPC_PATH,
            method: 'post',
            postData: {
                type: "application/x-www-form-urlencoded",
                data: PingBack.getRawBody(pingBackConfig.target, pingBackConfig.source.article)
            }
        };
    }
}