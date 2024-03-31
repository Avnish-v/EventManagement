export function getPublicUrl(url) {
    const urlParts = url.split("/");
    const fileName = urlParts[urlParts.length - 1];
    const newPath = `/uploads/${fileName}`;

    return newPath;
  }

  export function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    let hours = date.getHours();
    const amPM = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert hours from 24-hour to 12-hour format
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds} ${amPM}`;
}