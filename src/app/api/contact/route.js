export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const service = formData.get("service")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const text = `
Нова заявка з сайту Cube Freestyle

Ім’я: ${name}
Телефон: ${phone}
Послуга: ${service}
Повідомлення: ${message || "-"}
`.trim();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("TELEGRAM ENV MISSING", {
        token: !!token,
        chatId: !!chatId,
      });
      return new Response("Telegram not configured", { status: 500 });
    }

    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

    const res = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("TELEGRAM ERROR:", errorText);
      return new Response("Error sending to Telegram", { status: 500 });
    }

    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("CONTACT_FORM_ERROR:", error);
    return new Response("Error sending message", { status: 500 });
  }
}
