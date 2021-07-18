# remote-pastebin

simple zero-dependency http server that logs POST requests. that's it.


## Run as a Docker container

```sh
  ## start as a container
  docker run -d -p3033:80 --name remote-pastebin entomb/remote-pastebin

  ## read the output
  docker logs -f remote-pastebin
```

## POST a file
visit http port 3033 or 
```sh
 ## send a file
 curl http://[ HOST MACHINE]:3033 --data-binary @- < README.md
 
 ## send plain text
 curl http://[ HOST MACHINE]:3033 -d "text here"
```

## Get rid of it
```sh
  docker stop remote-pastebin
  docker rm remote-pastebin
```