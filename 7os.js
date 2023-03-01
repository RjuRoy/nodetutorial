const os = require('os');
//current user
const user = os.userInfo();
console.log(user);

//system uptime in seconds
console.log(`system uptime is ${os.uptime()}`);

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs);