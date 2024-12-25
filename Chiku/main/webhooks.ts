import { TelegramUpdate as X } from "../Chiku/interfaces";
import { SECRET as Y } from "../../config";
import { ChikuAi as Z } from "../index";
import { TgApi as W } from "./api";

async function A(a: FetchEvent): Promise<Response> {
  if (a.request.headers.get("X-Telegram-Bot-Api-Secret-Token") !== Y) {
    return new Response("Unauthorized", { status: 403 });
  }
  try {
    const b: X = await a.request.json();
    await B(b);
    return new Response("Bot is active");
  } catch (c) {
    console.error("Error:", c);
    return new Response("Error processing request", { status: 500 });
  }
}

async function B(d: X): Promise<void> {
  if (d.message) {
    await Z.handleMessage(d.message);
  } else if (d.callback_query) {
    await Z.handleCallback(d.callback_query);
  }
}

async function C(
  e: FetchEvent,
  f: URL,
  g: string,
  h: string
): Promise<Response> {
  const i = `${f.protocol}//${f.host}${g}`;
  const j = await fetch(W("setWebhook", { url: i, secret_token: h })).then((k) =>
    k.json()
  );
  if (!("ok" in j) || !j.ok) {
    throw new Error(`Failed to set webhook: ${JSON.stringify(j)}`);
  }
  return new Response("Ok");
}

async function D(l: FetchEvent): Promise<Response> {
  const m = await fetch(W("setWebhook", { url: "" })).then((n) => n.json());
  if (!("ok" in m) || !m.ok) {
    throw new Error(`Failed to remove webhook: ${JSON.stringify(m)}`);
  }
  return new Response("Ok");
}

export { A as handleWebhook, C as ChikuOn, D as ChikuOf, B as onUpdate };

