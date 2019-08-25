# process-name

[![Build](https://img.shields.io/travis/com/arshadkazmi42/process-name.svg)](https://travis-ci.com/arshadkazmi42/process-name/)

Get platform specific application process name (cross platform)

## Install

```
npm i process-name --save
```

## Usage

```javascript

const { ProcessName, ProcessNameConstants } = require('process-name');

const chromeProcessName = ProcessName.BROWSERS[ProcessNameConstants.BROWSERS.CHROME][process.platform];
const firefoxProcessName = ProcessName.BROWSERS[ProcessNameConstants.BROWSERS.FIREFOX][process.platform];

console.log(chromeProcessName, firefoxProcessName);

// Output
// Chrome, firefox

```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/process-name/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase

## Contributors

Thank you to all the contributors who have helped us in making this project better :raised_hands:

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>
