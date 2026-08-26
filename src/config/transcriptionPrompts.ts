export const DEFAULT_RUSSIAN_TRANSCRIPTION_PROMPT =
  "К пятнице скину два исправленных дата-поинта. По ним будет проще сориентироваться. Если что-то не сойдётся, обсудим отдельно.";

export const DEFAULT_ENGLISH_TRANSCRIPTION_PROMPT =
  "I'll send two corrected data points by Friday. They should be easier to review. If something looks off, we'll discuss it separately.";

export const DEFAULT_TRANSCRIPTION_PROMPT = `${DEFAULT_RUSSIAN_TRANSCRIPTION_PROMPT}\n${DEFAULT_ENGLISH_TRANSCRIPTION_PROMPT}`;

export const TRANSCRIPTION_PROMPT_PRESETS: Record<string, { label: string; prompt: string }> = {
  ru: {
    label: "Русский — мой стиль",
    prompt: DEFAULT_RUSSIAN_TRANSCRIPTION_PROMPT,
  },
  en: {
    label: "English",
    prompt: DEFAULT_ENGLISH_TRANSCRIPTION_PROMPT,
  },
  es: {
    label: "Español",
    prompt:
      '¡Hola! ¿Cómo estás? Él dijo: "Hagámoslo hoy — mientras tengamos tiempo." Claro, no es tan sencillo.',
  },
  fr: {
    label: "Français",
    prompt:
      "Bonjour ! Comment allez-vous ? Il a dit : « Faisons-le aujourd'hui — tant qu'on a le temps. » Ce n'est pas si simple.",
  },
  de: {
    label: "Deutsch",
    prompt:
      'Hallo! Wie geht es Ihnen? Er sagte: „Machen wir es heute — solange wir Zeit haben." So einfach ist es nicht.',
  },
  pt: {
    label: "Português",
    prompt:
      'Olá! Como você está? Ele disse: "Vamos fazer isso hoje — enquanto temos tempo." Não é tão simples.',
  },
  it: {
    label: "Italiano",
    prompt:
      'Ciao! Come stai? Ha detto: "Facciamolo oggi — finché abbiamo tempo." Non è così semplice.',
  },
  ja: {
    label: "日本語",
    prompt: "こんにちは！元気ですか？「今日やりましょう。」もちろん、簡単ではない。",
  },
  "zh-CN": {
    label: "中文（简体）",
    prompt: '你好！你怎么样？他说："今天就做吧。"当然，事情没那么简单。',
  },
  "zh-TW": {
    label: "中文（繁體）",
    prompt: "你好！你怎麼樣？他說：「今天就做吧。」當然，事情沒那麼簡單。",
  },
};
