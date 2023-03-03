function logConsole(){
    console.log('from test/test.js');

    console.log(__dirname);

    console.log('nn-------');


    console.log(__filename);
    console.log('nn-------');


    console.log(process.cwd());
}

module.exports = {
    logConsole ,

}