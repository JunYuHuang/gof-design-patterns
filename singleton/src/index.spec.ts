import { describe, expect, test } from "@jest/globals";
import { AppTheme } from "./index";

describe("Singleton Pattern", () => {
  test("works", () => {
    const appTheme1 = AppTheme.getInstance();
    const appTheme2 = AppTheme.getInstance();
    expect(appTheme1 === appTheme2).toStrictEqual(true);
    
    appTheme1.setThemeName("light");
    expect(appTheme1.themeName()).toStrictEqual("light");
    expect(appTheme2.themeName()).toStrictEqual("light");

    appTheme2.setThemeName("dark");
    expect(appTheme1.themeName()).toStrictEqual("dark");
    expect(appTheme2.themeName()).toStrictEqual("dark");
  });
});
