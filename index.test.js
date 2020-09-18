const { failingCasesFrom, annotationsFrom } = require("./index");

describe("Flat report", () => {
  test("Converts JUnit XML to GitHub annotations", async () => {
    const failingCases = await failingCasesFrom(
      "./test-results/junit-failure.xml"
    );
    expect(failingCases).toMatchSnapshot();

    const annotations = annotationsFrom(failingCases);
    expect(annotations).toMatchSnapshot();
  });
});

describe("Nested report", () => {
  let failingCases;
  test("Converts JUnit XML to failing cases in JSON", async () => {
    failingCases = await failingCasesFrom(
      "./test-results/junit-nested-failure.xml"
    );
    expect(failingCases).toMatchSnapshot();
  });

  test("Converts failing cases in JSON to GitHub annotations", async () => {
    const annotations = annotationsFrom(failingCases);
    expect(annotations).toMatchSnapshot();
  });
});
