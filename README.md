
## Description

This project use [ReactJs](https://react.dev/) framework TypeScript.
- The app includes socket.io to send notifications when new videos are available.
- Using Authentication with JWT.

## Installation & Running app
- Clone project.
- Install [Nodejs](https://nodejs.org/en) version > 16.*Ignore if use Docker*
- Change directory to root folder of project.
- Copy ".env.template" and change filename to ".env".
- Read template file and fill infomation to ".env".
- Run commands in order to start project or test .
- Project start at http://localhost:<ENV.APP_PORT>

### Start & Test without Docker
```bash
$ npm install

$ npm run start

$ num run test
```

### Start & Test with Docker
```bash
$ sudo chown -R $(whoami) ~/.docker //For sure you have permisson

$ docker compose build

$ docker compose up -d

$ sudo docker exec -it <Container_Name> sh 

$ npm run test:cov 

```
