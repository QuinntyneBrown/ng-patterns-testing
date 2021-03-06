#AngularJS Patterns Testing - Demo
Demonstrates Angular testing

[![Build Status](https://travis-ci.org/johnpapa/ng-patterns-testing.svg?branch=master)](https://travis-ci.org/johnpapa/ng-patterns-testing)

>*Opinionated AngularJS style guide for teams by [@john_papa](//twitter.com/john_papa)*

>More details about the styles and patterns used in this app can be found in my [AngularJS Style Guide](https://github.com/johnpapa/angularjs-styleguide) and my **AngularJS Patterns: Clean Code**(coming soon) course at [Pluralsight](http://pluralsight.com/training/Authors/Details/john-papa) and working in teams.
> 
## Slides

The slides for Ward's talk which accompanies this project are available on google docs.

[See the slides](https://docs.google.com/presentation/d/137lgLMtflW3q4SBKrrjVgiuSAi6GC19T4mNVox-4kV8/present)

## TODO
1. Structure will have specs side by side with code, except cross cutting tests
2. Remove extraneous code unrelated to tests
3. Add ui-router
4. Revise from avengers

## Structure
	/build 	(created on the fly)
	/gulp	
	/src
		/client
			/app
			/content
			/test
		/server
			/data
			/routes
	

## Installing Node.js and Bower Packages
- Open terminal
- Type `npm install`

>Do not be alarmed by the occasional sea of red complaining about
the inability to re-build some library. You can ignore these warnings
because we always use the pre-built libraries that were shipped with
the package.

## Cleaning 
Over time you might accumulate some old libraries.

It doesn't hurt to occasionally clear the decks by deleting the
"bower\_components" and "node\_modules" folders and re-installing
with `npm install`.

## Installing Bower Packages
`npm install` will install these too, but you can do it manually.
- Open terminal
- Type `bower install`


## Testing
There are two ways to test: in the browser and with karma

### Testing in the browser

* Open a command or terminal window.

* With browser-sync 
    * in specs.html, comment out `mocha.checkLeaks()` // false leak report from browser sync
    * run `gulp serve-specs`<br/><br/>

* Without browser-sync 
    * run `gulp serve-specs --nosync`
	* open a browser to `localhost:7202/specs.html`
	* browsing to `localhost:7202` runs the app<br/><br/>

* To stop, either "Ctrl-C" and answer the prompt with "Y" or just close the window.

### Testing with karma
* Open a command or terminal window.

* To just the unit tests, type `gulp autotest` 

* To run both unit and midway tests (spins up a dev server), type `gulp autotest --startServers`

Testing uses karma, mocha, chai, sinon, ngMidwayTester libraries.

>"autotest" starts the tests and stays alive, watching for file changes. Type "test" instead if you only want to run the tests once and then exit.

* To stop, either "Ctrl-C" and answer the prompt with "Y" or just close the window.

## Running the app
Runs locally, no database required.

### Dev Builds
The dev build does not optimize the deployed code. It simply runs it in place. You can run a dev build in multiple ways.

####Option 1 - Serve
Type `gulp serve-dev` and browse to `http://localhost:7202`

####Option 2 - Serve and Debug Node
Type `gulp serve-dev-debug` and browse to `http://localhost:7202` for the client and `http://localhost:8080/debug?port-5858` to debug the server.

####Option 3 - Serve and Debug Node Breaking on 1st Line
Type `gulp serve-dev-debug-brk` and browse to `http://localhost:7202` for the client and `http://localhost:8080/debug?port-5858` to debug the server.

### Staging Build
The staging build is an optimized build. Type `gulp serve-stage` and browse to `http://localhost:7202`

The optimizations are performed by the gulp tasks and include the following list. See the `gulpfile.js` for details

- jshint
- preparing Angular's templatecache for html templates
- concat task to bundle css and js, separately
- Angular dependency injection annotations using ngAnnotate
- uglify to minify and mangle javascript
- source maps
- css autoprefixer for vendor prefixes
- minify css
- optimize images
- index.html injection for scripts and links
- deploying all js, css, images, fonts, and index.html

## How The App Works
The app is quite simple and has 2 main routes:
- dashboard
- avengers list

### The Modules
The app has 4 feature modules and depends on a series of external modules and custom but cross-app modules

	app --> [
	        app.avengers,
	        app.dashboard,
	        app.layout,
	        app.widgets,
			app.core --> [
				ngAnimate,
				ngRoute,
				ngSanitize,
				blocks.exception,
				blocks.logger,
				blocks.router
			]
	    ]


