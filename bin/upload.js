#!/usr/bin/env node

'use strict'

const path    = require('path');
const cfg     = path.join(__dirname, '../config/upyun.js');
const Worker  = require('upyun-upload/lib/worker');
const util    = require('upyun-upload/lib/util');
const tasks   = util.parseConfig(cfg);
const Upyun   = require('upyun.io');
const config  = require(cfg);
const appName = require(path.join(__dirname, '../package.json')).name;
const request = require('request');
const open    = require('open');

const PROMOTION_HOST = 'https://p.helijia.com/';

let workers = tasks.map(function(task) {
  task.verbose = true
  return (new Worker(task)).upload();
})

let uploader = Upyun({
  operator : config.operator,
  password : config.password,
  endpoint : 'v0',
  bucket   : 'hlj-img'
})
workers.push(
  uploader.putFile('dist/assets/index.html', `promotion_html/${appName}/index.html`)
);

Promise.all(workers).then(function() {
  request.post( PROMOTION_HOST + 'p', {
    form: { slug: appName }
  }, function() {
    console.log('upload finished')
    open( PROMOTION_HOST + 'p/' + appName );
  });
})
.catch(function(e) {
  throw e
})
