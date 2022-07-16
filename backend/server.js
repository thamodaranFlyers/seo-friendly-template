import express from "express";
import dotenv from "dotenv";
import path from "path";

const app = express();
dotenv.config();

const __dirname = path.resolve();

if (process.env.APP_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );

  app.get("/", function (req, res) {
    var urlToScreenshot = parseUrl(req.query.url);

    if (validUrl.isWebUri(urlToScreenshot)) {
      console.log("Screenshotting: " + urlToScreenshot);
      (async () => {
        const browser = await puppeteer.launch({
          args: ["--no-sandbox", "--disable-setuid-sandbox"],
        });

        const page = await browser.newPage();
        await page.goto(urlToScreenshot);
        await page.screenshot().then(function (buffer) {
          res.setHeader(
            "Content-Disposition",
            'attachment;filename="' + urlToScreenshot + '.png"'
          );
          res.setHeader("Content-Type", "image/png");
          res.send(buffer);
        });

        await browser.close();
      })();
    } else {
      res.send("Invalid url: " + urlToScreenshot);
    }
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is up and running...");
  });
}

app.listen(
  process.env.APP_PORT || 5000,
  console.log(
    `Server running in ${process.env.APP_ENV} mode on port ${process.env.APP_PORT}`
  )
);
