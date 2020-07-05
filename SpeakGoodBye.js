(function(window){
  var speakWord = "Good Bye";
  var byeSpeaker = function speak (names) {
    console.log(speakWord + " " + names);
  }
  window.byeSpeaker = byeSpeaker;
  
})(window);