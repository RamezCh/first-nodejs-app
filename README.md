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

## Single Thread, Event Loop & Blocking Code

NodeJS uses a Single JS Thread.

Event Loop handles callbacks that contain fast finishing code

fs sends to Worker Pool that do all the heavy lifting, it runs on diff threads

Worker Pool triggers Callback which ends up in Event Loop & NodeJS executes appropriate callback

Event loop is a loop that looks for timer callbacks (setTimeout, setInterval), checks pending callbacks and executes them. Then it enters a Poll phase where it looks for new I/O events & execeute their callbacks if possible and if not, it will put them on pending. In Check phase it executes setImmediate() callbacks. Then it executes Close Callback and after that we might exit NodeJS program if no more events are registered (process.exit)

Timers -> Pending -> Poll -> Check -> Close
