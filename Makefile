.PHONY: install-run-test install-run-test

install-run-test:
	sudo apt-get install nodejs -y
	sudo npm install -g yarn
	yarn add jest
	
run-test:
	yarn jest
	
