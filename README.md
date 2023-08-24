# API

## users
### POST /users/signup
request
```
{
    "userID": "fbre",
    "password": "abc",
    "userName": "Ohoh"
}
```

### POST /users/signin
request
```
{
    "userID": "fbre",
    "password": "abc",
    "userName": "Ohoh"
}
```

## journeys
### GET /journeys/all

### GET /journeys/riderequest

### GET /journeys/rideoffer

### POST /journeys/register
request
```
{
    "whoWrite": "Juntion",
    "isMatch": false,
    "isFinish": false,
    "departure": "Daegu",
    "destination": "Busan",
    "rideType": "RideOffer",
    "pickedDate": "2023-08-20 03:50",
    "peopleRide": "7",
    "introduce": "User2"
}
```

### POST /journeys/match
request
```
{
    "userID":"fbre",
    "objectID":"64e5b8a37dcd0f55e5b7b9ec"
}
```