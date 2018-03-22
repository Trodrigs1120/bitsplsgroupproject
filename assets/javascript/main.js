// This .on("click") function will trigger the AJAX Call
      

      $(document).ready (function () {

        var source = $("#statsTemplate").html ();
        var template = Handlebars.compile(source);

        var context = {
          artist: " the correct queried data for this",

          uniqueWords: " the correct queried data for this",

          numOfSongs: " the correct queried data for this",

          wordsPerSong: " the correct queried data for this",

          uniqueWordsPerSong: " the correct queried data for this",

          percentUnique: " the correct queried data for this"
        }

        var new_html = template(context);

        $("#statsRendered").html(new_html);

    });

      // $("#findRapStats").on("click", function(event) {

      //   var stats = $(this).attr("rap-stats");//

      //   // event.preventDefault() can be used to prevent an event's default behavior.
      //   // Here, it prevents the submit button from trying to submit a form when clicked
      //   event.preventDefault();

      //   // Here we grab the text from the input box
      //   var artistInput = $("#rapper-input").val().trim();

      

