#!/usr/bin/env node
let package = require('../package.json');
const program = require('commander');
const download = require('download-git-repo');

program.version(package.version, '-v,--version')
    .command('f <name> [branch]')
    .action((name, branch) => {
        console.log(name)
        console.log(branch)
        console.log("load front project ...")
        if (branch) {
            download('direct:https://github.com/QCCS/nice-swa.git#' + branch, name, {clone: true}, function (err) {
                console.log(err ? 'Init Error' : 'Init Success')
            })
        } else {
            download('direct:https://github.com/QCCS/nice-swa.git#master', name, {clone: true}, function (err) {
                console.log(err ? 'Init Error' : 'Init Success')
            })
        }
    });

program.version(package.version, '-v,--version')
    .command('b <name> [branch]')
    .action((name, branch) => {
        console.log(name)
        console.log(branch)
        console.log("load front project ...")
        if (branch) {
            download('direct:https://github.com/QCCS/nice-swa-s.git#' + branch, name, {clone: true}, function (err) {
                console.log(err ? 'Init Error' : 'Init Success')
            })
        } else {
            download('direct:https://github.com/QCCS/nice-swa-s.git#master', name, {clone: true}, function (err) {
                console.log(err ? 'Init Error' : 'Init Success')
            })
        }
    });