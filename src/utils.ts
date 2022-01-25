import * as types from "./types";
import { ParsedQs } from "qs"

export function query(
    db: types.Client,
    collection: types.CollectionName, 
    format: types.Format, 
    callback: types.QueryCallback, 
    errorCallback: types.QueryErrorCallback
) {
    db.query({
        sql: {
            query: `SELECT _id AS format, data FROM cricket_rankings.${collection} WHERE true` + (format ? ` AND _id=:format` : ""),
            parameters: [
                {
                    name: "format",
                    type: "string",
                    value: format as string || ""
                }
            ]
        }
    }).then(callback).catch(errorCallback);
}

export function validateRequestParams(params: ParsedQs, errorCallback: (err: string) => any) {
    if(params.format && !["t20", "odi", "test"].includes(params.format as string)) { // TODO: runtime type checking
        errorCallback(`Format param ${params.format} not found.`)
    }
}