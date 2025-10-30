import { getCollection } from "@/../../lib/content";

export async function getPaginatedEvents(locale, page = 1, perPage = 9) {
  const events = await getCollection("portfolio", locale);
  const total = events.length;

  const start = (page - 1) * perPage;
  const end = start + perPage;
  const items = events.slice(start, end);

  return {
    items,
    total,
    totalPages: Math.ceil(total / perPage),
  };
}
