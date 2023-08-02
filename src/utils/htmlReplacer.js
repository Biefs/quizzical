function htmlReplacer(string){
  return string.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&eacute;/g, "é").replace(/&rsquo;/g, "’")
}


export default htmlReplacer