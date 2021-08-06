const {workerData, parentPort} = require('worker_threads');
const gm = require('gm');

gm(workerData.source)
    .monochrome()
    .write(workerData.destination, (error) => {
      if (error) {
        throw error;
      }
      parentPort.postMessage({monochrome: true});
    });
