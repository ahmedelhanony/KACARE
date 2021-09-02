export function downloadFile(fileLink: string , fileName : string): void {
  const link = document.createElement('a');
  link.setAttribute('target', '_self');
  link.setAttribute('href', fileLink);
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function getFirstChar(text: string) {
  if (text) {
    let characters = text.match(/\b(\w)/g);
    if (characters) {
      return characters.join('');
    } else {
      return '';
    }
  } else {
    return '';
  }
}