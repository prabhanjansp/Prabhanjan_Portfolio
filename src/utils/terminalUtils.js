export const renderAsciiName = () => {
  return `
  ██████╗ ██████╗  █████╗ ██████╗ ██╗  ██╗ █████╗ ███╗   ██╗     ██╗ █████╗ ███╗   ██╗
  ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██║  ██║██╔══██╗████╗  ██║     ██║██╔══██╗████╗  ██║
  ██████╔╝██████╔╝███████║██████╔╝███████║███████║██╔██╗ ██║     ██║███████║██╔██╗ ██║
  ██╔═══╝ ██╔══██╗██╔══██║██╔══██╗██╔══██║██╔══██║██║╚██╗██║██   ██║██╔══██║██║╚██╗██║
  ██║     ██║  ██║██║  ██║██████╔╝██║  ██║██║  ██║██║ ╚████║╚█████╔╝██║  ██║██║ ╚████║
  ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝
  `;
};

export const getDateDisplay = () => {
  const now = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const day = days[now.getDay()];
  const month = months[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
  
  return `
📅 ${day}, ${month} ${date}, ${year}
🕐 ${hours}:${minutes}:${seconds} ${ampm}
  `;
};