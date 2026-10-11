import { Router } from "express";
import { rateLimit } from "express-rate-limit";
import Message from "../models/Message.js";

const router = Router();
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { message: "Too many messages were submitted. Please try again later." }
});

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/", contactLimiter, async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body ?? {};
    if (![name, email, subject, message].every(value => typeof value === "string")) {
      return res.status(400).json({ message: "Please provide all required fields." });
    }

    const cleaned = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim()
    };

    if (cleaned.name.length < 2 || cleaned.name.length > 80 ||
        !emailPattern.test(cleaned.email) || cleaned.email.length > 254 ||
        cleaned.subject.length < 2 || cleaned.subject.length > 120 ||
        cleaned.message.length < 10 || cleaned.message.length > 3000) {
      return res.status(400).json({ message: "Please check your details and try again." });
    }

    await Message.create(cleaned);
    return res.status(201).json({ message: "Thanks! Your message has been saved." });
  } catch (error) {
    next(error);
  }
});

export default router;
