# Cricket Rankings API
Up-to-date rankings on cricket teams and players in all formats of the game! All data is from the [International Cricket Council](https://www.icc-cricket.com/rankings/mens/overview).

## Rest API Endpoints
The base URL for this API is [https://cricket-rankings-api.herokuapp.com/api/v1](https://cricket-rankings-api.herokuapp.com/api/v1).

### `/teams`
Get team rankings.

**Parameters**:
* `format` (optional): The cricket format ("test", "odi", or "t20") of rankings

**Response Schema**:
```typescript
[
    {
        "format": string, // "test", "odi", or "t20"
        "data": [
            {
                "rating": number,
                "rank": number,
                "matches": number,
                "points": number,
                "team_abbreviation": string, // e.g "AUS"
                "team_name": string // e.g  "Australia"
            }
            // other teams
        ]
    }
    // other cricket formats
]
```

### `/batters`
Get batter rankings.

**Parameters**:
* `format` (optional): The cricket format ("test", "odi", or "t20") of rankings

**Response Schema**:
```typescript
[
    {
        "format": string, // "test", "odi", or "t20"
        "data": [
            {
                "name": string // e.g "Virat Kohli"
                "team": string, // e.g "IND"
                "rank": number,
                "rating": number,
            }
            // other batters
        ]
    }
    // other cricket formats
]
```

### `/bowlers`
Get bowler rankings.

**Parameters**:
* `format` (optional): The cricket format ("test", "odi", or "t20") of rankings

**Response Schema**:
```typescript
[
    {
        "format": string, // "test", "odi", or "t20"
        "data": [
            {
                "name": string // e.g "Pat Cummins"
                "team": string, // e.g "AUS"
                "rank": number,
                "rating": number,
            }
            // other bowlers
        ]
    }
    // other cricket formats
]
```

### `/all_rounders`
Get all-rounder rankings.

**Parameters**:
* `format` (optional): The cricket format ("test", "odi", or "t20") of rankings

**Response Schema**:
```typescript
[
    {
        "format": string, // "test", "odi", or "t20"
        "data": [
            {
                "name": string // e.g "Mohammad Nabi"
                "team": string, // e.g "AFG"
                "rank": number,
                "rating": number,
            }
            // other all-rounders
        ]
    }
    // other cricket formats
]
```