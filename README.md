## Key Generator service 

## Requirements

To run you'll need:

- [Node.js](https://nodejs.org/) v9+.
- [npm](https://www.npmjs.com/) v5+.

## Usage

### Getting started

You will need to fork the project and clone it locally, then go to `We-Donate` folder.

```sh
$ git clone git@github.com:YOUR_USERNAME/Kgs.git
$ cd Kgs
```

#### Adding Database Keys
Add Database configurations to /files/development.json and /files/production.json

 ```sh
"URL" : "XXXXXXXXXXXXXXXXXX"
```

### Docker 
 - Mac install - brew install docker
 - Linux install - sudo apt-get docker 
 - [Windows install ](https://docs.docker.com/docker-for-windows/install/) 
 
Note- 
 `For windows docker will only run on Windows 10 64-bit: Pro, Enterprise, or Education (Build 15063 or later).`  

To start the server 
```sh
docker-compose up --build 
```

#### To run without Docker Follow the below steps - 
 
#### Installation
Install all the dependencies

```sh
$ npm install
```

#### Now run the server 

```sh
$ npm start
```

### Todo
 - Write Tests
 
## Contribute

Feel free to raise an issue about a bug or new feature you would like to see in this project. 
If you are willing to do some work, we will be glad to accept your PR.

[Mail To - ](medhavi.gupta6@gmail.com)Medhavi Gupta

## License

This project is [Licensed](LICENSE) under the MIT License (MIT).

