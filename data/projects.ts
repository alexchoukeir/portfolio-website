import { type IconName } from "lucide-react/dynamic";

export type Projects = {
  name: string;
  description: string;
  icon: IconName;
  techStack: string[];
  websiteUrl?: string;
  websiteType?: string;
  repoUrl?: string;
};

export const projects: Projects[] = [
  {
    name: "Voxlway",
    description:
      "Semantic search engine and discovery platform to help users find Roblox games. It utilizes LLMs and vector embeddings to make game discovery much quicker and more accurate. Instead of endlessly scrolling, users can describe gameplay, mechanics, or vibe and get relevant results instantly.",
    techStack: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "AWS",
      "RDS",
      "S3",
      "CloudFront",
      "ECR",
      "EC2",
      "SQS",
      "Route 53",
    ],
    icon: "database-search",
    websiteUrl: "https://voxlway.com/",
    repoUrl: "https://github.com/alexchoukeir/voxlway/",
  },
  {
    name: "Alarm System",
    description:
      "Real-time embedded alarm system with motion detection capabilities, enabling users to arm/disarm the system, and trigger an alarm upon detecting motion.",
    techStack: ["STM32Cube", "FreeRTOS", "C"],
    icon: "cpu",
    websiteUrl:
      "https://drive.google.com/file/d/1JPePShQ-a5a0IjChyZuGdQBxW-Bf7hx4/view?usp=sharing",
    websiteType: "Video",
  },
  {
    name: "Tempus II",
    description:
      "Timesheet management system enabling users to submit time entries and generate detailed reports.",
    techStack: ["Angular", "NestJS", "PostgreSQL", "Nx", "Azure"],
    icon: "clipboard-clock",
  },
  {
    name: "TwitchChatTTS",
    description:
      "A text-to-speech application for twitch.tv. This application reads out the messages coming from chat.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "WebSockets",
    ],
    icon: "audio-lines",
    repoUrl: "https://github.com/alexchoukeir/TwitchChatTTS",
  },
];
