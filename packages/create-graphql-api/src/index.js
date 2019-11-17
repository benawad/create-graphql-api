const commander = require("commander");
const chalk = require("chalk");
const packageJson = require("../package.json");
const fs = require("fs-extra");
const path = require("path");

let projectName;

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments("<project-directory>")
  .usage(`${chalk.green("<project-directory>")}`)
  .action(name => {
    projectName = name;
  })
  .parse(process.argv);

if (typeof projectName === "undefined") {
  console.error("Please specify the project directory:");
  console.log(
    `  ${chalk.cyan(program.name())} ${chalk.green("<project-directory>")}`
  );
  console.log();
  console.log("For example:");
  console.log(
    `  ${chalk.cyan(program.name())} ${chalk.green("my-graphql-api")}`
  );
  // console.log();
  // console.log(
  //   `Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`
  // );
  process.exit(1);
}
if (fs.existsSync(path.join(process.cwd(), projectName))) {
  console.log(`The directory ${chalk.green(projectName)} already exists.`);
  process.exit(1);
}

fs.copySync("../main-template", projectName);
