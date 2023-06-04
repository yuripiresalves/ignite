export const followersFormatter = (followers: number) => {
  if (followers < 1000) return followers;
  else if (followers < 1000000) return `${(followers / 1000).toFixed(1)}k`;
  else return `${(followers / 1000000).toFixed(1)}m`;
};

export const dateFormatterWithHour = (date: string) => {
  const formattedDate = new Date(date);
  const day = formattedDate.getDate();
  const month = formattedDate.toLocaleString('default', { month: 'short' });
  const year = formattedDate.getFullYear();
  const hour = formattedDate.getHours();
  const minutes = formattedDate.getMinutes().toString().padStart(2, '0');

  return `${day} ${month} ${year} às ${hour}:${minutes}`;
};

export const dateFromNowFormatter = (date: string) => {
  const formattedDate = new Date(date);
  const today = new Date();
  const diff = Math.abs(today.getTime() - formattedDate.getTime());
  const diffDays = Math.ceil(diff / (1000 * 3600 * 24));

  if (diffDays === 1) return `Há ${diffDays} dia`;
  else return `Há ${diffDays} dias`;
};
