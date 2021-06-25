'use strict';

const fork = require('child_process');

const getSHA = () => fork.execSync('git rev-parse HEAD').toString().trim();

module.exports = getSHA;
