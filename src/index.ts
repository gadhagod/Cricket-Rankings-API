import * as types from "./types"
import { query, validateRequestParams } from "./utils";
import express from "express";
import rockset from '@rockset/client';

let api_token = process.env.RS2_TOKEN;
if(!api_token) {
    throw "Rockset API Token not found."
}

let app = express();
let db = rockset(api_token).queries;

app.get("/", (req, res) => {
    res.redirect("https://github.com/gadhagod/Cricket-Rankings-API");
})

app.get("/api/v1/teams", (req, res) => {
    validateRequestParams(req.query, (err) => {
        res.sendStatus(400);
    });
    query(
        db, 
        "teams", 
        req.query.format as "test" | "odi" | "t20", 
        (results) => {
            res.send(results.results)
        }, 
        (err: any) => {
            console.error(err);
            res.sendStatus(500);
        }
    );
});

app.get("/api/v1/batters", (req, res) => {
    validateRequestParams(req.query, (err) => {
        res.status(400).send(err);
    });
    query(
        db,
        "batters", 
        req.query.format as "test" | "odi" | "t20", 
        (results) => {
            res.send(results.results)
        }, (err: any) => {
            console.error(err);
            res.sendStatus(500);
    });
});

app.get("/api/v1/bowlers", (req, res) => {
    validateRequestParams(req.query, (err) => {
        res.sendStatus(400);
    });
    query(
        db,
        "bowlers", 
        req.query.format as "test" | "odi" | "t20", 
        (results) => {
            res.send(results.results)
        }, (err: any) => {
            console.error(err);
            res.sendStatus(500);
    });
});

app.get("/api/v1/all_rounders", (req, res) => {
    validateRequestParams(req.query, (err) => {
        res.sendStatus(400)
    });
    query(
        db,
        "all_rounders", 
        req.query.format as "test" | "odi" | "t20", 
        (results) => {
            res.send(results.results)
        }, (err: any) => {
            console.error(err);
            res.sendStatus(500);
    });
});

app.listen(process.env.PORT ?? 3000, () => {
    console.log(`App running.`)
});