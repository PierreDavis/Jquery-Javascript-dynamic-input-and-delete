$(document).ready(function () {
    $(".add-items").submit(function(event) //event just so that it does not complain that event not there.
    {
		event.preventDefault();

    	var item = $("#todo-list-item").val(); //grabs value and inserts here

    	if (item)
    	{
    		$('#list-items').append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>X</a><hr></li>")
 			$("#todo-list-item").val("");   	//deletes value that is in here
    	}

    	
	});

    // $(".checkbox").change(function()
    // {
    // 	console.log("Checkbox checked!");
    // })

    $(document).on("change", ".checkbox", function() {

    	$(this).parent().toggleClass("completed");
    });

     $(document).on("click", ".remove", function() {

    	$(this).parent().remove();
    });

});
