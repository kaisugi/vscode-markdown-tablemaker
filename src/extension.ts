import * as vscode from 'vscode';
import createTable from './createTable';

export function activate(context: vscode.ExtensionContext) {

  context.subscriptions.push(vscode.commands.registerCommand('tablemaker.make', async () => {
    
    const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;

    if (editor === undefined) {
      return vscode.window.showErrorMessage("TextEditor is not active!");
    }

    let tableFormat: string | undefined = await vscode.window.showInputBox({
      ignoreFocusOut: true,
      placeHolder: "lcccr",
      prompt: "column positioning (e.g. lcccr)"
    })

    if (!tableFormat) {
      return vscode.window.showErrorMessage("Input value is empty.");
    } else {
      tableFormat = tableFormat.trim();

      if (!/^[lcr]+$/.test(tableFormat)) {
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
          await editor.edit(builder => {
            builder.insert(editor.selection.start, "TODO");
          });
        }
  
      }
    }

  }));
}