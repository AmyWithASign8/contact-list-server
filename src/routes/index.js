const { Router } = require("express");
const contactsRouter = require("./contact");

const router = Router();

router.use("/contact", contactsRouter);

module.exports = router;
