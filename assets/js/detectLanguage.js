const language = window.navigator.userLanguage || window.navigator.language;

if(language === 'pt-BR') {
  window.location.replace(`${window.location.href}/pt-BR/index.html`)
}