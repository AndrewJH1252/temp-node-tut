// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - infro about the current module (file)
// process - info abou the env where the program is being executed
console.log(__dirname);

setInterval(() => {
    console.log(`hello world`);
}, 1000);