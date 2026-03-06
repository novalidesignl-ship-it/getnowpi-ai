export interface Service {
  id: number;
  name: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  limitations: string | null;
  imageUrl: string | null;
  rating: number;
  votesCount: number;
}

export const categories = [
  { id: "all", label: "Все" },
  { id: "text", label: "Текст" },
  { id: "image", label: "Изображения" },
  { id: "audio", label: "Аудио" },
  { id: "video", label: "Видео" },
  { id: "code", label: "Код" },
  { id: "other", label: "Другое" },
];

export const services: Service[] = [
  {
    id: 1,
    name: "ChatGPT",
    description:
      "Чат-бот от OpenAI на базе GPT-4o. Отвечает на вопросы, пишет тексты, помогает с кодом, переводит и многое другое.",
    url: "https://chat.openai.com",
    category: "text",
    tags: ["чат-бот", "GPT", "копирайтинг", "перевод"],
    limitations: "Лимит сообщений GPT-4o, без доступа к DALL-E 3 на бесплатном плане",
    imageUrl: null,
    rating: 4.8,
    votesCount: 1240,
  },
  {
    id: 2,
    name: "Claude",
    description:
      "AI-ассистент от Anthropic. Отлично работает с длинными текстами, анализом документов и программированием.",
    url: "https://claude.ai",
    category: "text",
    tags: ["чат-бот", "анализ", "код", "документы"],
    limitations: "Лимит сообщений в день на бесплатном плане",
    imageUrl: null,
    rating: 4.7,
    votesCount: 890,
  },
  {
    id: 3,
    name: "Google Gemini",
    description:
      "AI от Google с доступом к поиску, генерации изображений и анализу файлов. Поддерживает мультимодальность.",
    url: "https://gemini.google.com",
    category: "text",
    tags: ["чат-бот", "поиск", "мультимодальный", "Google"],
    limitations: "Gemini Pro бесплатно, Ultra — платно",
    imageUrl: null,
    rating: 4.5,
    votesCount: 760,
  },
  {
    id: 4,
    name: "Ideogram",
    description:
      "Генерация изображений с отличной поддержкой текста на картинках. Создает логотипы, постеры, арт.",
    url: "https://ideogram.ai",
    category: "image",
    tags: ["генерация", "текст на картинках", "логотипы", "арт"],
    limitations: "До 25 генераций в день бесплатно",
    imageUrl: null,
    rating: 4.6,
    votesCount: 540,
  },
  {
    id: 5,
    name: "Leonardo AI",
    description:
      "Платформа для генерации изображений с множеством моделей и стилей. Подходит для игровых ассетов и концепт-арта.",
    url: "https://leonardo.ai",
    category: "image",
    tags: ["генерация", "концепт-арт", "игры", "стили"],
    limitations: "150 токенов в день бесплатно",
    imageUrl: null,
    rating: 4.5,
    votesCount: 620,
  },
  {
    id: 6,
    name: "Suno",
    description:
      "Генерация музыки по текстовому описанию. Создает полноценные треки с вокалом и инструментами.",
    url: "https://suno.com",
    category: "audio",
    tags: ["музыка", "генерация", "вокал", "треки"],
    limitations: "До 10 треков в день бесплатно, нельзя использовать коммерчески",
    imageUrl: null,
    rating: 4.7,
    votesCount: 430,
  },
  {
    id: 7,
    name: "ElevenLabs",
    description:
      "Превращает текст в реалистичную речь. Клонирование голоса, множество языков и интонаций.",
    url: "https://elevenlabs.io",
    category: "audio",
    tags: ["TTS", "озвучка", "клонирование голоса"],
    limitations: "10 000 символов в месяц бесплатно",
    imageUrl: null,
    rating: 4.8,
    votesCount: 510,
  },
  {
    id: 8,
    name: "Runway",
    description:
      "Генерация и редактирование видео с помощью AI. Text-to-video, image-to-video, удаление фона.",
    url: "https://runwayml.com",
    category: "video",
    tags: ["видео", "генерация", "редактирование", "фон"],
    limitations: "125 кредитов при регистрации, далее платно",
    imageUrl: null,
    rating: 4.4,
    votesCount: 380,
  },
  {
    id: 9,
    name: "Replit",
    description:
      "Онлайн-IDE с AI-помощником. Пишет, объясняет и дебажит код прямо в браузере. Поддерживает десятки языков.",
    url: "https://replit.com",
    category: "code",
    tags: ["IDE", "код", "AI-помощник", "браузер"],
    limitations: "Бесплатный план с ограниченными ресурсами",
    imageUrl: null,
    rating: 4.3,
    votesCount: 670,
  },
  {
    id: 10,
    name: "Codeium / Windsurf",
    description:
      "Бесплатный AI-автодополнитель кода для VS Code, JetBrains и других IDE. Альтернатива GitHub Copilot.",
    url: "https://codeium.com",
    category: "code",
    tags: ["автодополнение", "VS Code", "Copilot", "IDE"],
    limitations: "Бесплатно для индивидуального использования",
    imageUrl: null,
    rating: 4.5,
    votesCount: 490,
  },
  {
    id: 11,
    name: "Perplexity AI",
    description:
      "AI-поисковик, который находит информацию в интернете и дает ответы с источниками.",
    url: "https://perplexity.ai",
    category: "text",
    tags: ["поиск", "исследование", "источники", "факты"],
    limitations: "Ограниченное количество Pro-запросов в день",
    imageUrl: null,
    rating: 4.6,
    votesCount: 720,
  },
  {
    id: 12,
    name: "Remove.bg",
    description:
      "Автоматическое удаление фона с фотографий за секунды. Простой и быстрый инструмент.",
    url: "https://remove.bg",
    category: "image",
    tags: ["удаление фона", "фото", "редактирование"],
    limitations: "Бесплатно в низком разрешении, HD — платно",
    imageUrl: null,
    rating: 4.4,
    votesCount: 890,
  },
  {
    id: 13,
    name: "Kling AI",
    description:
      "Генерация видео от Kuaishou. Text-to-video и image-to-video с высоким качеством.",
    url: "https://klingai.com",
    category: "video",
    tags: ["видео", "генерация", "text-to-video"],
    limitations: "Ежедневные бесплатные кредиты",
    imageUrl: null,
    rating: 4.3,
    votesCount: 290,
  },
  {
    id: 14,
    name: "NotebookLM",
    description:
      "AI-блокнот от Google для анализа документов. Загружаете файлы — AI отвечает на вопросы по ним, создает подкасты.",
    url: "https://notebooklm.google.com",
    category: "other",
    tags: ["документы", "анализ", "подкасты", "Google"],
    limitations: "Полностью бесплатно",
    imageUrl: null,
    rating: 4.6,
    votesCount: 340,
  },
  {
    id: 15,
    name: "DeepL",
    description:
      "Один из лучших AI-переводчиков. Точные переводы с сохранением стиля и контекста.",
    url: "https://deepl.com",
    category: "text",
    tags: ["перевод", "языки", "документы"],
    limitations: "До 5000 символов за раз, 3 документа в месяц",
    imageUrl: null,
    rating: 4.7,
    votesCount: 950,
  },
  {
    id: 16,
    name: "Flux (через Replicate)",
    description:
      "Одна из лучших open-source моделей для генерации изображений. Высокое качество, реалистичность.",
    url: "https://replicate.com/black-forest-labs/flux-schnell",
    category: "image",
    tags: ["генерация", "open-source", "реалистичность"],
    limitations: "Бесплатные кредиты при регистрации на Replicate",
    imageUrl: null,
    rating: 4.5,
    votesCount: 310,
  },
];
