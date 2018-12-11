const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const initialItems = [
  {
    model: 'SUBARU Impreza WRX',
    countOfWheels: 4,
    maxSpeed: 320
  },
  {
    model: 'BMW Z4',
    countOfWheels: 4,
    maxSpeed: 220
  }
];

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

const textReport = async (req, res) => {
  crypto.randomBytes(20, async (err, buf) => {
    if (err) throw err;
    const fileName = path.resolve('files', `${buf.toString('hex')}.txt`);
    await fs.writeFile(fileName, JSON.stringify(initialItems), (err) => {
      if (err) {
        console.log(err);
      }
      res.download(fileName);
    });
  });
};

const binaryReport = async (req, res) => {
  crypto.randomBytes(20, async (err, buf) => {
    if (err) throw err;
    const fileName = path.resolve('files', `${buf.toString('hex')}.bin`);
    await fs.writeFile(fileName, new Buffer(initialItems, 'binary'), { encoding: 'binary' }, (err) => {
      if (err) {
        console.log(err);
      }
      res.download(fileName);
    });
  });
};

module.exports = {
  homePage,
  addNewItem,
  textReport,
  binaryReport,
};
