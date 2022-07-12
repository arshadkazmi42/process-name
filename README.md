# process-name

[![Build](https://github.com/arshadkazmi42/process-name/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/process-name/actions/workflows/nodejs.yml)
[![NPM Version](https://img.shields.io/npm/v/process-name.svg)](https://www.npmjs.com/package/process-name)
[![NPM Downloads](https://img.shields.io/npm/dt/process-name.svg)](https://www.npmjs.com/package/process-name)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/process-name.svg)](https://github.com/arshadkazmi42/process-name)
[![LICENSE](https://img.shields.io/npm/l/process-name.svg)](https://github.com/arshadkazmi42/process-name/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/process-name.svg)](https://github.com/arshadkazmi42/process-name/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/process-name.svg)](https://github.com/arshadkazmi42/process-name/commits/master)

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
