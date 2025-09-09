const {
  readFileSync,
  writeFileSync,
  writeFile,
  appendFile,
  rename,
  unlink,
} = require("fs");

// *********reading a file***********
try {
  const data = readFileSync("./src/hi.txt", "utf-8");
  console.log(data);
} catch (e) {
  console.error(e);
}

console.log("Log from outside");

// *********writing a file***********

const newContent = "\nThis is some new text";

try {
  writeFileSync("./src/hi.txt", newContent);
  console.log("Content written!");
} catch (e) {
  console.error(e);
}

appendFile("./src/hi.txt", newContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Content written");
});

// *******renaming a file********

rename("./src/hi.txt", "hello.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File renamed!");
});

// *******deleting a file********

unlink("./src/hello.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File deleted!");
});
