# Sprout-back
![KakaoTalk_Photo_2023-08-20-11-51-10 008](https://github.com/junction-sprout-team/Sprout-front/assets/97583162/32245f1e-294c-4534-9d1a-d55d3f808635)
![KakaoTalk_Photo_2023-08-20-11-51-10 005](https://github.com/junction-sprout-team/Sprout-front/assets/97583162/f9e62c2d-512a-4021-805e-035f2bb3afc5)
![KakaoTalk_Photo_2023-08-20-11-51-09 002](https://github.com/junction-sprout-team/Sprout-front/assets/97583162/55b024fb-a0f7-41ed-a6e7-e6148e557179)
![KakaoTalk_Photo_2023-08-20-11-51-08 001](https://github.com/junction-sprout-team/Sprout-front/assets/97583162/cd2ab914-a710-4ed8-8780-e20c820c5543)
![KakaoTalk_Photo_2023-08-20-11-51-09 004](https://github.com/junction-sprout-team/Sprout-front/assets/97583162/7831609e-57a3-4f6f-9a50-0737e00a8a9e)
![KakaoTalk_Photo_2023-08-20-11-51-10 007](https://github.com/junction-sprout-team/Sprout-front/assets/97583162/c11c5716-5190-45d3-a5cd-b14b460f6cbf)
![KakaoTalk_Photo_2023-08-20-11-51-09 003](https://github.com/junction-sprout-team/Sprout-front/assets/97583162/cb0985da-c60a-42fb-a11b-01a64f530cb8)
![KakaoTalk_Photo_2023-08-20-11-51-10 006](https://github.com/junction-sprout-team/Sprout-front/assets/97583162/07501059-b6df-4eba-b01b-ca8f8e956fe7)



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