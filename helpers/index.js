export const getTimeAgo = (eventDate) => {
  const now = new Date();

  const timeDiff = now - eventDate;

  const secondsDiff = Math.floor(timeDiff / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const [unit, interval] of Object.entries(intervals)) {
    const diff = Math.floor(secondsDiff / interval);
    if (diff >= 1) {
      return `${diff} ${unit}${diff > 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
};

export const getUsersCountFormat = (count, type = 'user') => {
  const formatter = new Intl.NumberFormat('en-US');
  const countString = formatter.format(count);

  if (count === 1) {
    return `${countString} ${type}`;
  } else if (count < 1000) {
    return `${countString} ${type}s`;
  } else if (count < 1000000) {
    return `${(count / 1000).toFixed(1)}K+ ${type}s`;
  } else if (count < 1000000000) {
    return `${(count / 1000000).toFixed(1)}M+ ${type}s`;
  } else {
    return `${(count / 1000000000).toFixed(1)}B+ ${type}s`;
  }
};

export const getNameInitials = (name = '') => {
  const nameWords = name.split(' ');
  return `${nameWords[0].charAt(0)}${nameWords[nameWords.length - 1].charAt(0)}`;
};