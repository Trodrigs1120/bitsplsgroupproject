// This .on("click") function will trigger the AJAX Call
      $("#findRapStats").on("click", function(event) {

        var recipe = $(this).attr("data-recipe");//

        // event.preventDefault() can be used to prevent an event's default behavior.
        // Here, it prevents the submit button from trying to submit a form when clicked
        event.preventDefault();

        // Here we grab the text from the input box
        var ingredient = $("#rapper-input").val().trim();

        var appId = "01d243ab"

        var appId = "01d243ab"

        var appKey = "bc26b1df0c29vc47ef4g19c42e127664"

        // Here we construct our URL
        // var queryURL = "https://api.whatever.com/search?q=" + rapper + "&app_id=" + appId + "&app_key=" + appKey;

        $.ajax ({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          });
      });