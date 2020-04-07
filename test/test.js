const assert = require('assert');
const fs = require('fs');
const Vinyl = require('vinyl');
const anyreplace = require('..');

const maps = [
  "/images/bibi.png"
]
const cdn = "https://cdn.test.com"

describe('replace test', function () {
  let file, check;

  beforeEach(function () {
    file = new Vinyl({
      path: 'test/fixture.axml',
      contents: fs.readFileSync('test/fixture.axml')
    });

    check = function (stream, done, cb) {
      stream.on('data', function (newFile) {
        cb(newFile);
        done();
      });
      stream.write(file);
      stream.end();
    };
  });
  it('should replace cdn on a buffer', function(done) {
    var stream = anyreplace((content)=> {
      maps.forEach(item => {
        content = content.replace(item, `${cdn}${item}`)
      })
      return content;
    });
    check(stream, done, function (newFile) {
      assert.equal(newFile.contents.toString(), fs.readFileSync('test/fixture-result.axml', 'utf8'));
    });
  });
})