export function load() {
  return new Promise((resolve) => {
    document.querySelector('#container').style.display = 'none';
    document.querySelector('#loader').style.display = 'flex';
    setTimeout(() => {
      document.querySelector('#loader').style.display = 'none';
      document.querySelector('#container').style.display = 'block';
      resolve();
    }, 1100);
  });
}
