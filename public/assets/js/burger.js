$(function(){
    var burger = [];
    var consumed_burger = [];

    $.ajax("/", {
        type: "GET"
    }).then(
        function(res){
            for(var i=0; i<res.length; i++){
                if(res[i].devoured === 0){
                    burger.push(res[i])
                } else {
                    consumed_burger.push(res[i])
                }
            }
        }
    )

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
            }
        );

    });
    
    $(".consume").on("click", function(event) {
        var id = $(".consume").val();
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: 1
        }).then(
            function() {
                console.log("done");
                location.reload();
            }
        );
    });
})