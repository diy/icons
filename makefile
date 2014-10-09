GULP_PATH = node_modules/.bin/gulp

build: clean
	$(GULP_PATH)

clean:
	rm -rf ./dist

.PHONY: build clean
