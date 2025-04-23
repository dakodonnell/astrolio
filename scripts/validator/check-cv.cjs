const { validate } = require("./validator.cjs");
const resume = require("../../src/data/cv.json");

validate(resume, (errors, success) => {
  if (!success) {
    console.error("\x1b[31m[cv.json INVALID]\x1b[0m Validation errors:\n");
    for (const err of errors) {
      console.error(`• ${err.stack}`);
    }
    process.exit(1);
  } else {
    console.log("\x1b[32m[cv.json OK]\x1b[0m Valid according to JSON Resume schema.");
  }
});
