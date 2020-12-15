export function formatDate(dateString) {
  if (!dateString) {
    throw "Invalid date string";
  }
  return new Date(dateString).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    day: "numeric",
    month: "short"
  });
}
