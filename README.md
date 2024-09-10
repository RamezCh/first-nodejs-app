# first-nodejs-app

## How the Web Works

User/Client (Browser) -> enters website (my-page.com) -> domain lookup -> browser sends request to server -> Backend code receives request and sees what to do then sends response to client

HTTPS: Hyper Text Transfer Protocol Secure

## Core Modules

1. http -> Launch a server, send requests

2. https -> Launch a SSL server (all data encrypted)

3. fs

4. path

5. os

## Node.js Program Lifecycle

node app.js -> start script -> parse code, register var & fn -> Event Loop

Event Loop keeps on running as long there are event listeners registered like server.listen

It keeps running and executes code when a certain event occures

## Stream & Buffers

Stream is an on-going process, where the req is read by chunks

Stream -> Req body1 -> Req body2 -> Req body3 -> Req body4 -> Fully Parsed

We can start working on data earlier but stream is a flow of data and we need to organize those chunks of data

To organize those chunks of data we use buffers, buffers are like a bus stop that allows us to hold multiple chunks and work with them
