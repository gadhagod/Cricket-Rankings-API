import { MainApi } from "@rockset/client";
import { QueryResponse } from "@rockset/client/dist/codegen/api";

export type Client = MainApi["queries"];
export type CollectionName = "batters" | "bowlers" | "all_rounders" | "teams";
export type Format = "test" | "odi" | "t20";
export type QueryCallback = (value: QueryResponse) => any;
export type QueryErrorCallback = (reason: any) => any;