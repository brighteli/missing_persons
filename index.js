const app = require("./app")
//specify port to run on

const port = 5000;
// listen in for requests on ports
app.listen(port,() => {
console.log(`Running on port ${port}`);
});