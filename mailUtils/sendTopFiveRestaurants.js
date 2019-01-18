const mailgunApiKey = process.env.MAILGUN_API_KEY;
const mailgunDomain = "recipes.foodpedia.com";
const mailgun = require("mailgun-js")({
  apiKey: mailgunApiKey,
  domain: mailgunDomain
});
const formatTimeString = require("./formatTimeString");


const  getEmailData =  () => {
   const emailData =  {
    from: "foodpedia <info@foodpedia.uk>",
    to: user.email,
    subject: `Top five restaurants based on your preference`,
    text: `Hi${
      user.name ? ` ${user.name}` : ""
    },\n\nHere's your top five restaurants - Thanks for using foodpedia.`,
    html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
      <head>
      <meta name="viewport" content="width=device-width" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Your foodpedia Restaurants</title>


      <style type="text/css">
      img {
      max-width: 100%;
      }
      body {
      -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em;
      }
      body {
      background-color: #f6f6f6;
      }
      @media only screen and (max-width: 640px) {
        body {
          padding: 0 !important;
        }
        h1 {
          font-weight: 800 !important; margin: 20px 0 5px !important;
        }
        h2 {
          font-weight: 800 !important; margin: 20px 0 5px !important;
        }
        h3 {
          font-weight: 800 !important; margin: 20px 0 5px !important;
        }
        h4 {
          font-weight: 800 !important; margin: 20px 0 5px !important;
        }
        h1 {
          font-size: 22px !important;
        }
        h2 {
          font-size: 18px !important;
        }
        h3 {
          font-size: 16px !important;
        }
        .container {
          padding: 0 !important; width: 100% !important;
        }
        .content {
          padding: 0 !important;
        }
        .content-wrap {
          padding: 10px !important;
        }
        .invoice {
          width: 100% !important;
        }
      }
      </style>
      </head>

      <body itemscope itemtype="http://schema.org/EmailMessage" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6">

      <table class="body-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
          <td class="container" width="600" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;" valign="top">
            <div class="content" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">
              <table class="main" width="100%" cellpadding="0" cellspacing="0" itemprop="action" itemscope itemtype="http://schema.org/ConfirmAction" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #e9e9e9;" bgcolor="#fff"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 20px;" valign="top">
                  <meta itemprop="name" content="Confirm Email" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;" /><table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                      <center><img style="width: 100px; height: auto;" src="https://s3.eu-west-2.amazonaws.com/foodpedia/foodpedia-logo.jpeg" alt="foodpedia Logo"/></center>
                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        <td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                          Hi${user.name ? ` ${user.name}` : ""},
                        </td>
                      </tr>
                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        <td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                          Here's your recipe for:
                        </td>
                      </tr>
                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        <td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                          <center><h1><strong style="color: #118035">${recipeTitle}<strong/></h1></center>
                        </td>
                      </tr>
                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        <td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                          <center><img src="${recipeImageURL}" alt="${recipeTitle}"/></center>
                        </td>
                      </tr>
                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        <td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                          ${recipeDescription}
                        </td>
                      </tr>
                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        <td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                          ${recipeIntroString}
                        </td>
                      </tr>
                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        <td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                          <h3><strong style="color: #118035">Ingredients:<strong/></h3>
                        </td>
                      </tr>
                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        <td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                          ${ingredientList}
                        </td>
                      </tr>
                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        <td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                          <h3><strong style="color: #118035">Method:<strong/></h3>
                        </td>
                      </tr>
                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        <td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                          ${stepsList}
                        </td>
                      </tr>
                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                        <td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                          <center><h3><strong style="color: #118035">Thanks for using foodpedia with Alexa!<strong/></h3></center>
                        </td>
                      </tr>
                      <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; margin: 0;">
                        <td class="content-block" itemprop="handler" itemscope itemtype="http://schema.org/HttpActionHandler" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 14px;" valign="top">
                          <center><a href="http://www.foodpedia.uk" class="btn-primary text-center" itemprop="url" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; background-color: #348eda; margin: 0; border-color: #348eda; border-style: solid; border-width: 6px 20px;">Find out more at www.foodpedia.uk</a></center>
                        </td>
                      </tr>
                    </table></td>
                </tr></table>
                <div class="footer" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; clear: both; color: #999; margin: 0; padding: 20px;">

                  <table width="100%" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                    <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                      <td class="aligncenter content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; vertical-align: top; color: #999; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top">
                        <strong>Too many emails?</strong>
                      </td>
                    </tr>
                    <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                      <td class="aligncenter content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; vertical-align: top; color: #999; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top">
                        You can turn foodpedia emails ON and OFF by saying:
                      </td>
                    </tr>
                    <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                      <td class="aligncenter content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; vertical-align: top; color: #999; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top">
                        <strong>"Alexa, ask foodpedia to turn emails ON/OFF"</strong>
                      </td>
                    </tr>
                    <tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
                      <td class="aligncenter content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; vertical-align: top; color: #999; text-align: center; margin: 0; padding: 0 0 20px;" align="center" valign="top">
                        Find out more at <a href="http://www.foodpedia.uk" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 12px; color: #999; text-decoration: underline; margin: 0;">www.foodpedia.uk</a>
                      </td>
                    </tr>
                  </table>

                </div>

              </div>
            </td>
          <td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
        </tr></table></body>
      </html>
      `
  };
const sendEmail = (user, restaurants = []) => {
  console.log("Emailing Recipe to User: ", JSON.stringify(user.email));

  // Recipe Title
  const recipeTitle = recipe.title;

  // Recipe Image
  const recipeImageURL = recipe.assets.image.default[0].url;

  // Recipe Descriptions
  let recipeDescription = "";
  if (recipe.short_description) {
    recipeDescription = `${recipe.short_description}`;
  } else if (recipe.description) {
    recipeDescription = `${recipe.description}`;
  }

  // Recipe Time String
  let recipeTimeString = "";
  // Prep Time + Cook Time
  if (recipe.prep_time > 0 && recipe.cook_time > 0) {
    recipeTimeString = `${formatTimeString(
      recipe.prep_time
    )} to prep, and ${formatTimeString(recipe.cook_time)} to cook. `;
  }
  // Just Prep Time
  else if (recipe.prep_time > 0) {
    recipeTimeString = `${formatTimeString(recipe.prep_time)} to prep. `;
  }
  // Just Cook Time
  else if (recipe.cook_time > 0) {
    recipeTimeString = `${formatTimeString(recipe.prep_time)} to cook. `;
  }
  // Only Use Total Time if No Prep / Cook Times
  else {
    recipeTimeString = `${formatTimeString(recipe.total_time)}. `;
  }

  // Recipe Serves String
  let recipeServesString = "";
  if (recipe.serves) {
    recipeServesString = `It serves ${recipe.serves}, `;
  }

  // Optional Strict Query String
  let strictQueryString = "";
  if (recipe.strictQueries) {
    for (let i = 0; i < recipe.strictQueries.length; i++) {
      strictQueryString += `${recipe.strictQueries[i]}, `;
    }
    // Remove Last Comma by Removing Last 2 Chars
    strictQueryString = strictQueryString.slice(0, -2);
  }

  // Optional Strict Query Value String
  let strictQueryValueString = "";
  if (
    recipe.calories_per_serving ||
    recipe.protein_per_serving ||
    recipe.carbs_per_serving ||
    recipe.sugar_per_serving ||
    recipe.fat_per_serving ||
    recipe.salt_per_serving
  ) {
    strictQueryValueString += "and contains ";
    // Calories
    if (recipe.calories_per_serving) {
      strictQueryValueString += `${Math.round(
        recipe.calories_per_serving
      )} calories per serving, and `;
    }
    // Protein
    if (recipe.protein_per_serving) {
      strictQueryValueString += `${recipe.protein_per_serving
        .toFixed(1)
        .replace(".0", "")} grams of protein per serving, and `;
    }
    // Carbs
    if (recipe.carbs_per_serving) {
      strictQueryValueString += `${recipe.carbs_per_serving
        .toFixed(1)
        .replace(".0", "")} grams of carbs per serving, and `;
    }
    // Sugar
    if (recipe.sugar_per_serving) {
      strictQueryValueString += `${recipe.sugar_per_serving
        .toFixed(1)
        .replace(".0", "")} grams of sugar per serving, and `;
    }
    // Fat
    if (recipe.fat_per_serving) {
      strictQueryValueString += `${recipe.fat_per_serving
        .toFixed(1)
        .replace(".0", "")} grams of fat per serving, and `;
    }
    // Salt
    if (recipe.salt_per_serving) {
      strictQueryValueString += `${recipe.salt_per_serving
        .toFixed(1)
        .replace(".0", "")} grams of salt per serving, and `;
    }

    // Replace last ', and' with '.' --> Remove Last 6 Chars
    strictQueryValueString = strictQueryValueString.slice(0, -6);
    strictQueryValueString += ".";
  }

  // Recipe Difficulty String - Don't Include if Strict Query Values
  let recipeDifficultyString = "";
  if (recipe.difficulties[0] && strictQueryValueString === "") {
    recipeDifficultyString = `and is ${
      recipe.difficulties[0].description
    } difficulty.`;
  }

  // Recipe Intro String
  const recipeIntroString = `This ${strictQueryString} recipe takes ${recipeTimeString} ${recipeServesString} ${strictQueryValueString} ${recipeDifficultyString}`;

  // Recipe Ingredients
  let recipeIngredients = [];
  for (const key in recipe.ingredients) {
    if (Object.prototype.hasOwnProperty.call(recipe.ingredients, key)) {
      const ingredientsForStage = recipe.ingredients[key].list;
      if (ingredientsForStage) {
        recipeIngredients = recipeIngredients.concat(ingredientsForStage);
      }
    }
  }
  const ingredientList = `
  <table cellpadding="0" cellspacing="0">
    ${recipeIngredients.map(
      ingredient => `
      <tr>
        <td> - ${ingredient.description}</td>
      </tr>
    `
    )}
  </table>`.replace(/,/g, "");

  // Recipe Steps
  let recipeSteps = [];
  for (const key in recipe.methods) {
    if (Object.prototype.hasOwnProperty.call(recipe.methods, key)) {
      const stepsForStage = recipe.methods[key].list;
      if (stepsForStage) {
        recipeSteps = recipeSteps.concat(stepsForStage);
      }
    }
  }

  const stepsList = `
  <table cellpadding="0" cellspacing="0">
    ${recipeSteps.map(
      (step, i) => `
      <tr>
        <td style="padding-bottom: 10px !important;"><strong>${i +
          1}</strong> - ${step.description}</td>
      </tr>
    `
    )}
  </table>`.replace(/,/g, "");

  

  return new Promise((resolve, reject) => {
    mailgun.messages().send(emailData, (error, body) => {
      if (error) {
        console.log("EMAIL ERROR: ", error);
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
};
