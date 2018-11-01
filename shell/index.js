#!/usr/bin/env node

var command = require('commander')
command
    .version(require('../package.json').version)
    .parse(process.argv)