function detect() {
  const python = require("child_process").spawn("python", [
    "./sign-language/main.py",
  ]);
  python.stdout.on("data", (data) => {
    console.log("data: ", data.toString("utf8"));
  });
  python.on("close", (code) => {
    console.log("close: ", code);
  });

  python.on("error", (error) => {
    console.log("error: ", error);
  });
}
