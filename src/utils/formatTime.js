export function formatTime(date) {
    const inputDate = new Date(date);
    return inputDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }
  