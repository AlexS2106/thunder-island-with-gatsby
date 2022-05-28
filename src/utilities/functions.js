
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
  return nodes.filter( node => node.frontmatter.type.includes( ulType ) ).map(node => node);
}
//Takes the date and returns the correct day.
 export function today () {
   const date = new Date().getDay();
    switch ( date ) {
      case 0: return "Sunday";
      case 1: return "Monday";
      case 2: return "Tuesday";
      case 3: return "Wednesday";
      case 4: return "Thursday";
      case 5: return "Friday";
      case 6: return "Saturday";
      default: return "Today";
    }
  };

