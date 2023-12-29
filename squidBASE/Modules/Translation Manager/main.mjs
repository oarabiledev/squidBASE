//Translation Manager, Note Modify The Lang Variable Follow Docs.
var langProps,langAux;
var lang = {
  "languages": ["English","Setswana"],
  "codes": {"english":"en","setswana":"tn"},

  "translations":{
      "HelloBtn":{
          "en":  "Hello From squidBase",
          "tn": "Bo rra squidBase Bare O Dumele"
      },
      "HelloAlert":{
          "en": "Heyyy, Alerting You.",
          "tn": "Dumela, Ke a ago Dumedisa Gape."
      }
  }
}

export function $(textReference,userLang){
  langProps = JSON.stringify(lang);
  langAux = JSON.parse(langProps);
  
  return langAux.translations[textReference][userLang];
}
