const fs = require('fs');

why0 = (cb) => {  
    const files = fs.readdirSync('./why0/').filter(file => file.endsWith('.why0'));
    for (const file of files) {
        fs.readFile(`./why0/${file}`, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return
            } else {
                cb(data);
            }
        })
    }
}

why0((data) => {
    console.log(data)
})