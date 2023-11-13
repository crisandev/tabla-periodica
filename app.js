const express = require("express");
const path = require("path");
const app = express();
const { engine } = require("express-handlebars");
const homeRouter = require("./routes/home");
const organizeHelper = require("./helpers/organizeElements");
const colorHelper = require("./helpers/color");
const hideHelper = require("./helpers/hide");
//Helpers
app.engine(
   "hbs",
   engine({
      helpers: {
         elementPosition: organizeHelper.ElementPosition,
         position: organizeHelper.position,
         nextLine: organizeHelper.nextLine,
         lastTowLines: organizeHelper.lastTwoLines,
         color: colorHelper.colorGroup,
         hideElement: hideHelper.hideElement,
      },
   })
);

app.set("view engine", "hbs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));
app.use(homeRouter);
app.use("/", (req, res, next) => {
   res.status(404).render("404", { layout: false });
});

app.listen(3000);
