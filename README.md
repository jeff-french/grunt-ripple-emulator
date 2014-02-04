# grunt-ripple-emulator

> Grunt task for the ripple emulator for Cordova/PhoneGap projects.

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ripple-emulator --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ripple-emulator');
```

## The "ripple_emulator" task

### Overview
In your project's Gruntfile, add a section named `ripple` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  ripple: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.path
Type: `String`
Default value: `'www'`

Path to your your Cordova / PhoneGap's main `www` directory (relative to your Gruntfile).

#### options.port
Type: `Integer`
Default value: `4400`

Port that ripple will server your application on.

#### options.open
Type: `Boolean`
Default value: `true`

If `true` opens your app in the browser with ripple enabled.

#### options.keepAlive
Type: `Boolean`
Default value: `false`

If `true` the task will keep running (keep your ripple server running).

**NOTE** If you are using [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) (or something similar) then you'll want to set `keepAlive: false`.

### Usage Examples

Serve the application from `dist` folder on port `9005` and keep the ripple server running.

```js
grunt.initConfig({
  ripple: {
    options: {
        path: 'dist',
        port: '9005',
        keepAlive: true
    }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
[v0.1.0](https://github.com/jeff-french/grunt-ripple-emulator/releases/tag/v0.1.0) - Initial release


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/jeff-french/grunt-ripple-emulator/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

