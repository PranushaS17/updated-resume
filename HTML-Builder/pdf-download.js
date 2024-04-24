const express = require("express");
const puppeteer = require("puppeteer");
const fs = require("fs");

const app = express();

app.get("/download-pdf", async (req, res) => {
  console.log("api called");
  const htmlFilePath = "C:/Users/pranusha.sivasamy/Work/Builder/resume.html";
  const pdfFilePath = "output.pdf";

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const htmlContent = fs.readFileSync(htmlFilePath, "utf-8");
  await page.setContent(htmlContent, { waitUntil: "domcontentloaded" });
  await page.emulateMediaType("screen");

  const pdf = await page.pdf({
    path: "result.pdf",
    //   margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
    printBackground: true,
    format: "A4",
  });

  console.log("result", pdf);
  await browser.close();

  res.download(pdfFilePath);

  //   const browser = await puppeteer.launch();
  //   const page = await browser.newPage();

  //   website_url = "http://127.0.0.1:5500/resume.html";
  //   await page.goto(website_url, { waitUntil: "networkidle0" });
  //   await page.emulateMediaType("screen");
  //   await page.waitForNavigation({
  //     waitUntil: "networkidle0",
  //   });
  //   const pdf = await page.pdf({
  //     path: "result.pdf",
  //     margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
  //     printBackground: true,
  //     format: "A4",
  //   });
  //   await browser.close();
  //   res.download(pdfFilePath);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
