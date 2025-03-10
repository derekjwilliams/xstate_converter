export function help() {
  console.log(`
    Usage: convert <command> [options]
    
    Commands:
      toMermaid  - Convert the directed graph (output of toDirectedGraph(yourMachine)) to a Mermaid Diagram
      --help     - Show this help message.
  `);
}
