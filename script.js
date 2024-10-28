const dictionary = document.querySelector('.dic');
const wordClass = document.querySelector('.phonetik');
const wordMeaning = document.querySelector('.word-meaning');
const wordDefine = document.querySelector('.word-define');
const form = document.querySelector('form');
const partsSpeech = document.querySelector('.speech')
const audio = document.querySelector('.audio')


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.querySelector('.text').value;
     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
     .then(function (data) {
         return data.json();
    })
    .then(function (jsondata) {

        const speak = jsondata[0].phonetics[0].audio;
        audio.src = speak;
        
       const wordNeed = jsondata[0].word;
       console.log(wordNeed);
      dictionary.innerHTML = wordNeed;

       wordClass.innerHTML = jsondata[0].phonetic;

        const meanings = jsondata[0].meanings[0].definitions[0].definition
        wordMeaning.innerHTML = meanings;

        partsSpeech.innerHTML = jsondata[0].meanings[0].partOfSpeech;

  wordDefine.innerHTML = jsondata[0].meanings[0].definitions[1].definition
        
    });
 });




//     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
//     .then(function(data){
//         return data.json();
//     })
//     .then(function(jsondata){
//         console.log(jsondata)
// });
// });