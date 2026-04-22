# csvpl-vscode

VS Code extension providing language support for [CSVPL](https://github.com/larrycaw/csvpl-lsp) pipeline scripts via the Language Server Protocol (LSP).

## Features

- Syntax highlighting for commands, processing elements, flags, strings, and comments
- Command completion (triggered on the first word of a line)
- Flag completion (triggered on `-`)
- Hover documentation
- Live diagnostics on file change

## Requirements

- Java 17+ on PATH (or configure `csvpl.javaPath`)
- The CSVPL LSP fat JAR — build it from [larrycaw/csvpl-lsp](https://github.com/larrycaw/csvpl-lsp)

## Install from VSIX

**Extensions pane:**
1. Open VS Code
2. `Ctrl+Shift+P` → **Extensions: Install from VSIX…**
3. Browse to `csvpl-vscode-0.0.1.vsix`

**Command line:**
```sh
code --install-extension csvpl-vscode-0.0.1.vsix
```

## Configuration

| Setting | Default | Description |
|---|---|---|
| `csvpl.serverJar` | `C:\dev\csvpl-lsp\target\csvpl-lsp-1.0-SNAPSHOT.jar` | Path to the LSP fat JAR built from [larrycaw/csvpl-lsp](https://github.com/larrycaw/csvpl-lsp) |
| `csvpl.javaPath` | `java` | Java executable (defaults to `java` on PATH) |

Override in VS Code settings (`Ctrl+,`) or `settings.json`:

```json
{
  "csvpl.serverJar": "/path/to/csvpl-lsp-1.0-SNAPSHOT.jar",
  "csvpl.javaPath": "/usr/lib/jvm/java-17/bin/java"
}
```

## Build from source

```sh
npm install
npm run compile
npx vsce package   # produces csvpl-vscode-0.0.1.vsix
```

## Related

- Language server: [larrycaw/csvpl-lsp](https://github.com/larrycaw/csvpl-lsp)
