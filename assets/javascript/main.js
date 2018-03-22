// This .on("click") function will trigger the AJAX Call
      

      $(document).ready (function () {

        var source = $("#statsTemplate").html ();
        var template = Handlebars.compile (source);

        var context = {
          artist: "some.queried.data.from.db.and.orm",

          uniqueWords: "some.queried.data.from.db.and.orm",

          numOfSongs: "some.queried.data.from.db.and.orm",

          wordsPerSong: "some.queried.data.from.db.and.orm",

          uniqueWordsPerSong: "some.queried.data.from.db.and.orm",

          percentUnique: "some.queried.data.from.db.and.orm",
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

      

