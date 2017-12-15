const Attempt = require("./attempt");

Attempt.deleteMany().then(() => {
  console.log("Deleted attempts");
  process.exit();
});
