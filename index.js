$(document).ready(function () {
    

    $('#list-items').html(localStorage.getItem("listItems"));


    $(".add-items").submit(function(event) //event just so that it does not complain that event not there.
    {
		event.preventDefault();

    	var item = $("#todo-list-item").val(); //grabs value and inserts here

    	if(item == 'egg')
        {

            $('#list-items').append("<li><input class='checkbox' type='checkbox'/>" + "<a href = 'http://gph.is/2ppfkc1'>Easter EGG!!</a>" + "<a class='remove'>X</a><hr></li>")
            localStorage.setItem("listItems", $('#list-items').html())
            $("#todo-list-item").val("");       //deletes value that is in here
        }   
        else
    	{
    		$('#list-items').append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>X</a><hr></li>")
 			localStorage.setItem("listItems", $('#list-items').html())
            $("#todo-list-item").val("");   	//deletes value that is in here

        }

    	
	});

    // $(".checkbox").change(function()
    // {
    // 	console.log("Checkbox checked!");
    // })

    $(document).on("change", ".checkbox", function() {
        if($(this).attr("checked"))
        {
            $(this).removeAttr("checked");
        }
        else
        {
            $(this).attr("checked", "checked");
        }
     
    	$(this).parent().toggleClass("completed");
         localStorage.setItem("listItems", $('#list-items').html());
    });

     $(document).on("click", ".remove", function() {
          
          $(this).fadeOut( "slow", function() {
                    $(this).parent().remove();
                    localStorage.setItem("listItems", $('#list-items').html());
             });

    });

});
