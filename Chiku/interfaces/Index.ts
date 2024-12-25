export interface AIResponse {
  text?: string;
}

export interface TelegramUpdate {
  message?: {
    chat: { id: number };
    text?: string;
  };
}

export interface NekoResponse {
  results: { url: string }[];
}

export interface CallbackQuery {
  id: string;
  data: string;
  message?: {
    chat: { id: number };
    message_id: number;
  };
}

