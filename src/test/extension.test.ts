//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from "assert";
import createTable from "../createTable";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as vscode from 'vscode';
// import * as myExtension from '../extension';

// Defines a Mocha test suite to group tests of similar kind together
suite("Create Table Test", function() {
  // Defines a Mocha unit test
  test("Example Table 1", function() {
    assert.equal(
      createTable("lllrrrccc", 5),
      `
|    |    |    |    |    |    |    |    |    |
|:---|:---|:---|---:|---:|---:|:--:|:--:|:--:|
|    |    |    |    |    |    |    |    |    |
|    |    |    |    |    |    |    |    |    |
|    |    |    |    |    |    |    |    |    |
|    |    |    |    |    |    |    |    |    |
|    |    |    |    |    |    |    |    |    |
`.replace(/^\n/, "")
    );
  });
});
