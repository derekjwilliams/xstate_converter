#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { convert_to_mermaid } from "../src/commands/convert_to_mermaid.js";
import { help } from "../src/commands/help.js";

yargs(hideBin(process.argv))
  .command(
    "toMermaid <filename>",
    "Converts the specified file containing text from XState\'s toDirectedGraph(machine))",
    (yargs) => {
      return yargs.positional("filename", {
        type: "string",
        describe: "file containing text from XState\'s toDirectedGraph(machine))",
      });
    },
    (argv) => {
      console.log(JSON.stringify(argv.filename))
      convert_to_mermaid(argv.filename as string);
    }
  )
  .help()
  .alias("help", "h")
  .parse();

