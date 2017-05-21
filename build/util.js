const child_process = require('child_process')
const Promise = require('promise')
const fs = require('fs')

exports.exec = function (comm) {
    return new Promise((resolve, reject) => {
        child_process.exec(comm, (err, stdout, stderr) => {
            if (err) {
                console.log('[错误]', err)
                console.log('[错误信息]', stderr)
                return reject(err)
            }
            return resolve(stdout)
        })
    })
}

exports.readFile = function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => err ? reject(err) : resolve(data))
    })
}

exports.writeFile = function writeFile(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, 'utf-8', (err) => err ? reject(err) : resolve())
    })
}
