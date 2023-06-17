import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let diagnosticCollection = vscode.languages.createDiagnosticCollection('spectral-extension');
  
  vscode.workspace.onDidOpenTextDocument((document) => {
    if (document.languageId === 'yaml' || document.languageId === 'yml') {
      const problems = vscode.languages.getDiagnostics(document.uri);
      const spectralProblems = problems.filter((problem) => problem.source === 'spectral');
      if (spectralProblems.length > 0) {
        vscode.window.showInformationMessage('Hi spectral');
      }
    }
  });

  vscode.workspace.onDidChangeTextDocument((event) => {
    const document = event.document;
    if (document.languageId === 'yaml' || document.languageId === 'yml') {
      const problems = vscode.languages.getDiagnostics(document.uri);
      const spectralProblems = problems.filter((problem) => problem.source === 'spectral');
      if (spectralProblems.length > 0) {
        vscode.window.showInformationMessage('Hi spectral');
      }
    }
  });

  context.subscriptions.push(diagnosticCollection);
}

export function deactivate() {}