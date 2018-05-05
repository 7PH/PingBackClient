import {PingBackRequestConfig} from "./PingBackRequestConfig";
import {PingBack} from "./PingBack";
import {SyncRequest} from "sync-requests";


export class PingBackRequest extends SyncRequest {

    constructor (public readonly pingBackConfig: PingBackRequestConfig) {
        super(PingBack.getRequestConfig(pingBackConfig));
    }
}