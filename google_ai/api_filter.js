//Set Google API credentials 
const path = __dirname
process.env.GOOGLE_APPLICATION_CREDENTIALS = `${path}/../config/google_key.json`;

// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Instantiates a client
const client = new language.LanguageServiceClient();

// The text to analyze
const text = 'I cannot fucking believe that my boss fired me today';

const document = {
  content: text,
  type: 'PLAIN_TEXT',
};

// Detects the sentiment of the text
client
  .analyzeSentiment({ document: document })
  .then(results => {
    const sentiment = results[0].documentSentiment;

    console.log(`Text: ${text}`);
    console.log(`Sentiment score: ${sentiment.score}`);
    console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });

  // Detects entities of the text 
client
  .analyzeEntitySentiment({ document: document })
  .then(results => {
    
    const entities = results[0].entities;        

    console.log('Entities:');
    entities.forEach(entity => {
      console.log(entity.name);
      console.log(` - Type: ${entity.type}, Salience: ${entity.salience}`);
      console.log(' - Word Sentiment:');
      console.log(` - Magnitude: ${entity.sentiment.magnitude}, Score: ${entity.sentiment.score}`);
      
      if (entity.metadata && entity.metadata.wikipedia_url) {
        console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}$`);
      }
    })
  });