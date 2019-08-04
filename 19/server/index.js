var newFile = require('./additional');

newFile.additional();
newFile.read('../18.html', function(data) {
    console.log(data);
});