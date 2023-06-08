
## Description

This project use [ReactJs](https://react.dev/) framework TypeScript.
- The app includes socket.io to send notifications when new videos are available.
- Authentication with JWT.
- Redux & Redux Toolkit for manage state.
- Axios for HTTP request.
- Tailwind for styling website.

## How To Use
- Video viewing feature will not need to log in.
- To log in, enter your email/password on the right corner of the screen and click Login (No account will automatically register. If you already have an account but the password is wrong, a message will appear).
- After login you can Upload video by clicking Create Video button. You will need a url of the video you want to upload, check the video again on the right side of the screen. After uploading all logged in users will receive a notification about the video you just uploaded.
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

$ npm run test

```