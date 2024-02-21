export const getTimeAgo = (eventDate) => {
  // Get the current date and time
  const now = new Date();

  // Calculate the time difference in milliseconds
  const timeDiff = now - eventDate;

  // Convert milliseconds to seconds
  const secondsDiff = Math.floor(timeDiff / 1000);

  // Define time intervals in seconds
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  // Iterate through intervals to find the largest one that fits the time difference
  for (const [unit, interval] of Object.entries(intervals)) {
    const diff = Math.floor(secondsDiff / interval);
    if (diff >= 1) {
      return `${diff} ${unit}${diff > 1 ? 's' : ''} ago`;
    }
  }

  // If the time difference is less than a minute, show 'just now'
  return 'just now';
};