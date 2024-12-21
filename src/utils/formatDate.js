export function formatDate(date) {
    const today = new Date();
    const inputDate = new Date(date);
  
    const diffInTime = today - inputDate;
    const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
  
    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "Yesterday";
  
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ];
  
    const day = inputDate.getDate().toString().padStart(2, "0");
    const month = months[inputDate.getMonth()];
    return `${day} ${month}`;
  }
  