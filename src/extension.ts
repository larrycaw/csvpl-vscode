import * as path from "path";
import * as vscode from "vscode";
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
} from "vscode-languageclient/node";

let client: LanguageClient;

export function activate(context: vscode.ExtensionContext): void {
  const config = vscode.workspace.getConfiguration("csvpl");
  const serverJar = config.get<string>(
    "serverJar",
    "C:\\dev\\csvpl-lsp\\target\\csvpl-lsp-1.0-SNAPSHOT.jar"
  );
  const javaPath = config.get<string>("javaPath", "java");

  const serverOptions: ServerOptions = {
    command: javaPath,
    args: ["-jar", serverJar],
    options: {},
  };

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: "file", language: "csvpl" }],
    synchronize: {
      fileEvents: vscode.workspace.createFileSystemWatcher("**/*.csvpl"),
    },
  };

  client = new LanguageClient(
    "csvpl",
    "CSVPL Language Server",
    serverOptions,
    clientOptions
  );

  client.start();
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined;
  }
  return client.stop();
}
