(function (window){
  var speakWord = "Hello";
  var helloSpeaker = function speak(names){
      console.log(speakWord + " " + names);
      }
    window.helloSpeaker = helloSpeaker;
  })(window);