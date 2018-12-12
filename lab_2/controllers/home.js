const fs = require('fs');
const crypto = require('crypto');
const path = require('path');
const formidable = require('formidable');

let initialItems = [];

const homePage = (req, res) => {
  res.render('index', {
    data: initialItems,
  });
};

const addNewItem = (req, res) => {
  const { model, wheels, speed } = req.body;

  initialItems.push({
    model,
    countOfWheels: wheels,
    maxSpeed: speed,
  });

  res.render('index', {
    data: initialItems,
  });
};

const textReport = async (req, res, next) => {
  crypto.randomBytes(20, async (err, buf) => {
    if (err) return next(err);
    const fileName = path.resolve('files', `${buf.toString('hex')}.txt`);
    try {
      await fs.writeFile(fileName, JSON.stringify(initialItems), (err) => {
        if (err) {
          return next(err);
        }
        res.download(fileName);
      });
    } catch (err) {
      return next(err);
    }
  });
};

const binaryReport = async (req, res, next) => {
  crypto.randomBytes(20, async (err, buf) => {
    if (err) return next(err);
    const fileName = path.resolve('files', `${buf.toString('hex')}.bin`);
    try {
      await fs.writeFile(fileName, new Buffer(JSON.stringify(initialItems), 'binary'), { encoding: 'binary' }, (err) => {
        if (err) {
          return next(err);
        }
        res.download(fileName);
      });
    } catch (err) {
      return next(err);
    }
  });
};

const uploadText = (req, res, next) => {
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      return next(err);
    }

    fs.readFile(files.upload.path, (err, data) => {
      if (err) {
        return next(err);
      }
      try {
        const items = JSON.parse(data.toString());
        initialItems = items;
      } catch (err) {
        return next(err);
      }
      res.redirect('/');
    });
  });
};

const uploadBinary = (req, res, next) => {
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      return next(err);
    }

    fs.readFile(files.upload.path, 'binary', (err, data) => {
      if (err) {
        return next(err);
      }
      try {
        const items = JSON.parse(data.toString('binary'));
        initialItems = items;
      } catch (err) {
        return next(err);
      }
      res.redirect('/');
    });
  });
};

module.exports = {
  homePage,
  addNewItem,
  textReport,
  binaryReport,
  uploadText,
  uploadBinary,
};
