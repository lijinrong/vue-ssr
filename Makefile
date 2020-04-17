# NPM_REGISTRY = "--registry=http://registry.npm.taobao.org"
NPM_REGISTRY = ""
DATE ?= date

####################################################################################
#基础与公共命令

install:
	@npm install $(NPM_REGISTRY)

####################################################################################
#启动与重启服务

run:
	@NODE_ENV=dev node app.js	


autoStart:
	@NODE_ENV=prod nohup pm2 start bin/www -i 12 --name "WebServer" --max-memory-restart 1024M >> logs/WebServer.log 2>&1 &

autoRestart:
	@NODE_ENV=prod nohup pm2 restart "WebServer" >> logs/WebServer.log 2>&1 &


start: install autoStart

restart: install autoRestart
