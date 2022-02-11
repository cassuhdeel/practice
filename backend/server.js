const app = express();
const knex = require("./db/connection");

app.listen(5000, () => {
    console.log('Server is running on port 5000!')
})