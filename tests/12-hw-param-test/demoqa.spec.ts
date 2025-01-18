import { test, expect } from "@playwright/test";
import { importFromCSV } from "./helper";
import { Student } from "./student"; 

test.describe("test", async() => {
  let data: Student[] = await importFromCSV("test-data.csv");

  for (const [index, student] of data.entries()) {
    test(`DEMOQA:${index.toString().padStart(3, "0")} Try to register without mandatory field`, async ({page}) => {
      await page.goto("https://demoqa.com/automation-practice-form");
    });
  }
});
