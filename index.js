import { Client, GatewayIntentBits, Events } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const { TOKEN } = process.env;

if (!TOKEN) {
  throw new Error("❌ TOKEN missing");
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, (c) => {
  console.log(`✅ Placement Bot Online as ${c.user.tag}`);
});

// ----------------------
// MESSAGE COMMANDS
// ----------------------
client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot) return;

  const msg = message.content.toLowerCase();

  if (msg === "roadmap") {
    return message.reply(
      "🎯 CSE Placement Roadmap:\n\n" +
      "1. DSA (Arrays → DP)\n" +
      "2. One Language (Java/C++/Python)\n" +
      "3. Web Dev (MERN Stack)\n" +
      "4. Aptitude Practice\n" +
      "5. Projects (3-5 strong projects)\n" +
      "6. Resume + Interview Prep"
    );
  }

  if (msg === "dsa") {
    return message.reply(
      "🧠 DSA Plan:\n\n" +
      "- Arrays & Strings\n- Linked List\n- Stack & Queue\n- Trees\n- Graphs\n- DP (Basic)\n\n👉 Practice: LeetCode Easy → Medium"
    );
  }

  if (msg === "resume") {
    return message.reply(
      "📄 Resume Tips:\n\n" +
      "- Keep it 1 page\n" +
      "- Add real projects\n" +
      "- Mention skills clearly\n" +
      "- GitHub links important\n" +
      "- No fake skills ❌"
    );
  }

  if (msg === "interview") {
    return message.reply(
      "🎤 Interview Prep:\n\n" +
      "Technical:\n- DSA\n- OOPs\n- Projects\n\nHR:\n- Tell me about yourself\n- Strengths/Weakness\n- Why this company?"
    );
  }

  if (msg === "hello") {
    return message.reply("👋 Hello! I am your Placement Support Bot.");
  }
});

// ----------------------
// SLASH COMMANDS
// ----------------------
client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    return interaction.reply("🏓 Pong!");
  }

  if (interaction.commandName === "roadmap") {
    return interaction.reply("🎯 Focus: DSA + Projects + Aptitude + Resume");
  }

  if (interaction.commandName === "dsa") {
    return interaction.reply("🧠 Practice 150–250 LeetCode problems");
  }

  if (interaction.commandName === "resume") {
    return interaction.reply("📄 Keep resume clean, 1 page, project-heavy");
  }

  if (interaction.commandName === "interview") {
    return interaction.reply("🎤 Practice DSA + HR answers daily");
  }

  if (interaction.commandName === "hello") {
    return interaction.reply("👋 Hello from Placement Bot!");
  }
});

client.login(TOKEN);