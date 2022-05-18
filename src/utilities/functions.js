
//puts all words in a sentence to lower case, with dashes and no spaces
export function makeSlug( sentence ) {
  return sentence.toString().replaceAll( " ", "-" ).replaceAll( ",", "" ).replaceAll("'", "").trim().toLowerCase(); 

}

//Separates out the title from and makes all words in a sentence into individual words which begin with an upper case letter.

export function makeTitle ( sentence ) {
  let words = sentence.toString().trim().replaceAll( "-", " " ).replaceAll("/", "").split( " " );

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

return words.join(" "); 
}

//Takes in all frontmatter. Checks for subcategories. Returns subcategories if they are there or joins by_course, by_ingredient, by_diet to use as subcategories if there are none.

export function listSubcategories ( frontmatter ) { 
  return frontmatter.subcategories ? frontmatter.subcategories : [ ...frontmatter.by_course, ...frontmatter.by_diet, ...frontmatter.by_ingredient ];
}

//Reduce the length of a sentence
export function reduceSentenceLength (sentence, requiredLength ) { 
  return sentence.length < requiredLength ? sentence : sentence.split( "" ).slice( 0, requiredLength ).join( "" ).concat( "..." );
}

//Matches an array against a qraphql node array
export function filterList (listOfChoicesArray, nodeArrayToFilter) { 
  const filteredArray = listOfChoicesArray.map( choice => nodeArrayToFilter.filter( node => node.frontmatter.slug === choice ) );
  return filteredArray.flat();
}
///takes a node array and separates it into lists by type
export function sortingUlsFromNodes ( nodes, ulType ) {
  return nodes.filter( node => node.frontmatter.type.includes( ulType ) ).map(node => node.frontmatter.title);
}
