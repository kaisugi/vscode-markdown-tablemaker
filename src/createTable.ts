export default function createTable(
  tableFormat: string,
  numberOfLines: number
): string {
  const numberOfColumns: number = tableFormat.length;
  let tableText = "|";

  for (let i = 1; i <= numberOfColumns; ++i) {
    tableText += `    |`;
  }

  tableText += "\n|";

  for (let i = 0; i < numberOfColumns; ++i) {
    switch (tableFormat[i]) {
      case "l":
        tableText += ":---|";
        break;
      case "c":
        tableText += ":--:|";
        break;
      case "r":
        tableText += "---:|";
        break;
    }
  }

  tableText += "\n";

  for (let i = 1; i <= numberOfLines; ++i) {
    tableText += "|";

    for (let j = 1; j <= numberOfColumns; ++j) {
      tableText += `    |`;
    }

    tableText += "\n";
  }

  return tableText;
}
