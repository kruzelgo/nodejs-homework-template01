const app = require("./app");
require("dotenv").config();

const PORT = process.env.MAIN_PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
