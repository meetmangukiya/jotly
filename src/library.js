const fs = require('fs');

class Chapter {

};

class Notebook {
  constructor(dir) {
    this._dir = dir;
  }

  index() {

  }
};

class Library {
  constructor() {
    this._path = '~/.jotly';
    this._dir = new Directory(this._path);
  }

  notebooks() {
    return this._dir.subdirectories().map((dir) => new Notebook(dir));
  }
};

class fsItem {
  constructor(path) {
    this._path = path;
  }
};

class File extends fsItem {

};

class Directory extends fsItem {
  subdirectories() {
    return fs.readdirSync(this._path).filter((file) => {
      return fs.statSync(this._path + '/' + file).isDirectory();
    }).map((path) => new Directory(this._path + '/' + path));
  }

  files(func) {
    return fs.readdirSync(this._path).filter((file) => {
      return fs.statSync(this._path + '/' + file).isFile();
    }).map((path) => new File(this._path + '/' + path));
  }
};

module.exports = {
  Directory: Directory,
}
