$(function(){

    $("#submit").on("click", function(event) {
        event.preventDefault();
        
        console.log($("#burgerText").val());
        $.ajax("/api/burgers", {
            type: "POST",
            data: {
                burger_name: $("#burgerText").val(),
                devoured: 0
            }
        }).then(
            function() {
              console.log("Created");
              location.reload();
            }
        );

    });
    
    $(".consume").on("click", function(event) {
        var id = $(this).val();
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: {
                devoured: 1
            }
          }).then(
            function() {
                console.log("done");
                location.reload();
            }
        );
    });
})