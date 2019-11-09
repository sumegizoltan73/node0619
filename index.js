const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function lsExample() {
  const { stdout, stderr } = await exec('ls /');
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}
lsExample();

/*
const utils = require('util');
const { exec } = require('child_process');
*/

/*
exec('ls /', (err, stdout, stderr) => {
    if (err) { 
        console.log('error');
        process.exit(1); 
    }

    console.log(stdout);
});
*/

/*
const execP = utils.promisify(exec);

const main= async () => {
    try {
        const { stdout, stderr } = await execP('ls /');
        console.log(stdout);

    } catch (error) {
        console.log('error');
        process.exit(1);
    }
};

main();
*/