# gulp-anyreplace

> gulp replace anything what you want.

[![Greenkeeper badge](https://badges.greenkeeper.io/icai/gulp-anyreplace.svg)](https://greenkeeper.io/)
[![npm](https://img.shields.io/npm/v/gulp-anyreplace.svg)](https://www.npmjs.org/package/gulp-anyreplace)
[![npm](https://img.shields.io/npm/dm/gulp-anyreplace.svg)](https://www.npmjs.org/package/gulp-anyreplace)
[![Build Status](https://travis-ci.org/icai/gulp-anyreplace.svg?branch=master)](https://travis-ci.org/icai/gulp-anyreplace)
[![GitHub issues](https://img.shields.io/github/issues-closed/icai/gulp-anyreplace.svg)](https://github.com/icai/gulp-anyreplace/issues)
[![GitHub contributors](https://img.shields.io/github/contributors/icai/gulp-anyreplace.svg)](https://github.com/icai/gulp-anyreplace/graphs/contributors)
[![David](https://img.shields.io/david/icai/gulp-anyreplace.svg)](https://david-dm.org/icai/gulp-anyreplace)
[![David Dev](https://img.shields.io/david/dev/icai/gulp-anyreplace.svg)](https://david-dm.org/icai/gulp-anyreplace?type=dev)
![NPM](https://img.shields.io/npm/l/gulp-anyreplace)




## Install

```bash
npm i gulp-anyreplace --save-dev
```


## Usage

```js
const anyReplace = require('gulp-anyreplace')

gulp.task('templates', function(){
  gulp.src(['/**/*', '!node_modules/**/*', '!.tea/**/*'])
    .pipe(anyReplace((content)=> {
        maps.forEach(item => {
            content = content.replace(item, `${cdn}${item}`)
        })
        return content;
    }))
    .pipe(gulp.dest('../xxxx-build/'));
});

```


## License

Copyright (c) 2020 Terry Cai. Licensed under the Apache-2.0 license.



