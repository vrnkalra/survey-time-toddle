require("dotenv").config();

const server = require("./server");

const portNo = 3300;

const PORT = process.env.PORT || portNo;

server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));
