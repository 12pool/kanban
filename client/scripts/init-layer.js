/* eslint-disable */
import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Choose layer (entities/shared): ', (layer) => {
  if (layer !== 'entities' && layer !== 'shared') {
    console.log('Invalid layer. Please choose either entities or shared.');
    rl.close();
    return;
  }

  rl.question('Enter the name of the object: ', (objectName) => {
    const basePath = './src';
    const segments = ['utils', 'model', 'api', 'feature', 'ui'];

    segments.forEach((segment) => {
      const dirPath = path.join(basePath, layer, objectName, segment);

      if (fs.existsSync(dirPath)) {
        throw new Error(`Directory ${dirPath} already exists`);
      }

      fs.mkdirSync(dirPath, { recursive: true });

      fs.writeFileSync(path.join(dirPath, '.gitkeep'), '');
    });

    rl.close();
  });
});
