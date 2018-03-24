// This .on("click") function will trigger the AJAX Call
      

      $(document).ready (function () {

        var source = $("#statsTemplate").html ();
        var template = Handlebars.compile(source);

        var context = {
          artist: "Eminem",

          uniqueWords: "100",

          numOfSongs: "11",

          wordsPerSong: "229",

          uniqueWordsPerSong: "7",

          percentUnique: "25",
          
          artistUrl: "https://lastfm-img2.akamaized.net/i/u/300x300/d15881b09b6041ccad34c2490de618b3.png",
          
          
          }

        var new_html = template(context);

        $("#statsRendered").html(new_html);
        ///////////////////////////////////////

        // var newsource=$("#ArtistHeader").html ();
        // var template = Handlebars.compile(newsource);

        // var header = {
        //   artistUrl: "https://lastfm-img2.akamaized.net/i/u/300x300/d15881b09b6041ccad34c2490de618b3.png",
        //   artist: "Eminem"

        // }
        // var header_html = template(header);

        // $("#HeaderRendered").html(header_html);
//////////////////////////////////////////////////
        var source = $("#statsTemplate2").html ();
        var template = Handlebars.compile(source);

        var context = {
          artist: "Kanye West",

          uniqueWords: "115",

          numOfSongs: "21",

          wordsPerSong: "239",

          uniqueWordsPerSong: "13",

          percentUnique: "30",
          
          artistUrl: "https://lastfm-img2.akamaized.net/i/u/300x300/0bb8f87ced4c49b5b4f7cb45cd9f30dc.png",
          
          
          }

        var new_html = template(context);

        $("#statsRendered2").html(new_html);
///////////////////////////////////////////////////
var source = $("#statsTemplate3").html ();
var template = Handlebars.compile(source);

var context = {
  artist: "Nas",

  uniqueWords: "62",

  numOfSongs: "52",

  wordsPerSong: "210",

  uniqueWordsPerSong: "14",

  percentUnique: "24",
  artistUrl: "https://lastfm-img2.akamaized.net/i/u/300x300/8dce63c224a643b78b39caeb27aadf8b.png",
  
  }

var new_html = template(context);

$("#statsRendered3").html(new_html);




    });

      // $("#findRapStats").on("click", function(event) {

      //   var stats = $(this).attr("rap-stats");//

      //   // event.preventDefault() can be used to prevent an event's default behavior.
      //   // Here, it prevents the submit button from trying to submit a form when clicked
      //   event.preventDefault();

      //   // Here we grab the text from the input box
      //   var artistInput = $("#rapper-input").val().trim();

      

