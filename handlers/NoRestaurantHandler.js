const noRestaurant = context => {
  const noResultSpeech = `Sorry, No restaurants found for ${recipeName} at ${userPrefLocation}.`;
  const beginNewSearch =
    "You can begin new search or come back to the food finder later.";
  const noResultRePrompt = "say begin new search.";
  context.ask(noResultSpeech + beginNewSearch, noResultRePrompt);
};
module.exports = { noRestaurant };
