const noRestaurant = context => {
  const noResultSpeech = `Sorry, No restaurants found for this ${recipeName} at ${userPrefLocation}.`;
  const beginNewSearch =
    "You can begin new search or come back to the foodpedia later.";
  const noResultRePrompt = "say begin new search.";
  context.ask(noResultSpeech + beginNewSearch, noResultRePrompt);
};
module.exports = { noRestaurant };
