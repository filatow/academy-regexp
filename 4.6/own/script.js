const str = `Одностраничное приложение — это приложение, которое состоит из единственной страницы и прочих ресурсов (таких как HTML, js и CSS), необходимых для успешной работы. Запуск приложения осуществляется из единственного файла index.html в корневой папке.`;

const Abbr = {
  CSS: `Cascading Style Sheets`,
  HTML: `Hyper Text Markup Language`,
  JS: `JavaScript`
};

const insertAbbr = (str) => {
  const re = /([^\.])\b(css|html|js)\b/ig;
  
  const result = str.replace(re, (_, $1, $2) => {
    return `${$1}<abbr title=”${Abbr[$2.toUpperCase()]}”>${$2.toUpperCase()}</abbr>`;
  });

  return result;
};

const formattedStr = insertAbbr(str);
document.querySelector('#text').insertAdjacentHTML('afterbegin', formattedStr);
console.log(formattedStr);