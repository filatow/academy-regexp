const str = `Одностраничное приложение — это приложение, которое состоит из единственной страницы и прочих ресурсов (таких как HTML, js и CSS), необходимых для успешной работы. Запуск приложения осуществляется из единственного файла index.html в корневой папке.`;

const Abbr = {
  CSS: `Cascading Style Sheets`,
  HTML: `Hyper Text Markup Language`,
  JS: `JavaScript`,
};

const insertAbbr = (str) => {
  if (!str) {
    return ``;
  }
  const regex = new RegExp(
    `(\\.)?\\b(${Object.keys(Abbr).join('|')}|
      ${Object.keys(Abbr)
        .map((abbr) => abbr.toLowerCase())
        .join('|')})\\b`,
    'g'
  );

  return str.replace(regex, (string, $1, $2) => {
    if (!$1) {
      const upper = $2.toUpperCase();
      return `<abbr title="${Abbr[upper]}">${upper}</abbr>`;
    }
    return $1 + $2;
  });
};

const formattedStr = insertAbbr(str);
document.querySelector('#text').insertAdjacentHTML('afterbegin', formattedStr);
console.log(formattedStr);
