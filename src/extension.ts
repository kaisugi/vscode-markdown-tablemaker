import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

  context.subscriptions.push(vscode.commands.registerCommand('tablemaker.make', async () => {
    
    const tableFormat: string | undefined = await vscode.window.showInputBox({
      ignoreFocusOut: true,
      placeHolder: "lcccr",
      prompt: "column positioning (e.g. lcccr)"
    })

    if (!tableFormat) {
      return vscode.window.showErrorMessage("Input value is empty.");
    } else if (!/^[lcr]+$/.test(tableFormat)) {
      return vscode.window.showErrorMessage("Do not use characters other than l, c and r.");
    } else {

      const numberOfLines: number = await vscode.window.showInputBox({
        ignoreFocusOut: true,
        prompt: "number of lines"
      }).then(inputText => {
        return Number(inputText);
      })

      if (!Number.isInteger(numberOfLines)) {
        return vscode.window.showErrorMessage("Number is not formatted correctly.");
      } else if (numberOfLines <= 0) {
        return vscode.window.showErrorMessage("Number of lines must be positive.");
      } else {
        /* TODO */
      }

    }

  }));
}

export function createTable(tableFormat: string, numberOfLines: number): string {
  return "TODO";
}