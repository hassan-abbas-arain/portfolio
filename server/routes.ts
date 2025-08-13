import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }
      
      // In a real application, you would:
      // 1. Send an email notification
      // 2. Store the message in a database
      // 3. Send an auto-reply to the user
      
      console.log("Contact form submission:", { name, email, message });
      
      res.json({ success: true, message: "Message received successfully" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // CV download endpoint
  app.get("/api/download-cv", (req, res) => {
    try {
      // In a real application, you would serve the actual CV file
      // For now, we'll create a response that indicates the CV would be downloaded
      const cvPath = path.join(process.cwd(), "attached_assets", "AI_Engineer_Hassan_CV_1755022192256.pdf");
      
      if (fs.existsSync(cvPath)) {
        res.download(cvPath, "Hassan_Abbas_CV.pdf");
      } else {
        res.status(404).json({ error: "CV file not found" });
      }
    } catch (error) {
      console.error("Error serving CV:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
