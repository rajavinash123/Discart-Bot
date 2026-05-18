import { REST, Routes } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const { TOKEN, CLIENT_ID } = process.env;

if (!TOKEN || !CLIENT_ID) {
  throw new Error("❌ Missing TOKEN or CLIENT_ID");
}

// Placement commands
const commands = [
  { name: "ping", description: "Check bot response" },
  { name: "hello", description: "Greeting message" },
  { name: "roadmap", description: "CSE placement roadmap" },
  { name: "dsa", description: "DSA preparation guide" },
  { name: "resume", description: "Resume building tips" },
  { name: "interview", description: "Interview preparation guide" },
];

const rest = new REST({ version: "10" }).setToken(TOKEN);

const deployCommands = async () => {
  try {
    console.log("🚀 Deploying placement support commands...");

    const data = await rest.put(
      Routes.applicationCommands(CLIENT_ID),
      { body: commands }
    );

    console.log(`✅ Successfully deployed ${data.length} commands`);
  } catch (err) {
    console.error(err);
  }
};

deployCommands();