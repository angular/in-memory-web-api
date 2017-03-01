/*
Module declaration for node_modules/parseuri
*/
declare module "parseuri" {
    interface URI {
        source: string;
        protocol: string;
        authority: string;
        userInfo: string;
        user: string;
        host: string;
        port: string;
        path: string;
        directory: string;
        file: string;
        query: string;
        anchor: string;
        ipv6uri: boolean;
    }
    export default function parseuri(url: string): URI;
}
