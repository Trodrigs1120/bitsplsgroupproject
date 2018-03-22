// This .on("click") function will trigger the AJAX Call
      

      $(document).ready (function () {

        var source = $("#statsTemplate").html ();
        var template = Handlebars.compile (source);

        var context = {
          artist: "artist-specific.data.from.db-orm",

          uniqueWords: "artist-specific.data.from.db-orm",

          numOfSongs: "artist-specific.data.from.db-orm",

          wordsPerSong: "artist-specific.data.from.db-orm",

          uniqueWordsPerSong: "artist-specific.data.from.db-orm",

          percentUnique: "artist-specific.queried.data.from.db-orm",
        }

        var new_html = template (context);

        $("statsTemplate").html (new_html);

    });

      $("#findRapStats").on("click", function(event) {

        var stats = $(this).attr("rap-stats");//

        // event.preventDefault() can be used to prevent an event's default behavior.
        // Here, it prevents the submit button from trying to submit a form when clicked
        event.preventDefault();

        // Here we grab the text from the input box
        var artistInput = $("#rapper-input").val().trim();

      

