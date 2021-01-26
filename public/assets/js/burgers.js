
   // var select = document.getElementById("create-form"),
     //   arr = ["Cheeseburger", "Hamburger", "Veggieburger", "Baconburger", "Double Cheeseburger", "Deluxe Bacon Cheeseburger", "Burger in a Bowl"];

    //for (var i = 0; i < arr.length; i++) {
      //  var option = document.createElement("OPTION"),
        //txt = document.createTextNode(arr[i]);
        //option.appendChild(txt);
        //option.setAttribute("value", arr[i]);
        //select.insertBefore(option,select.lastChild);
   // }
$(function() {
   $("#create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(), devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("selected burger");
            location.reload();
        });
    });

    $("#payburger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Burger devoured!");
            location.reload();
        });
    });

    $("#finishburger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });
})
