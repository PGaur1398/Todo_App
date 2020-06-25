
(function(){
    //Ajax call to update checkbox in mongodb
    $(document).on('change', '.chkbox', function(event) {
      var tasks = new Array();
      if ($(this).is(":checked")) {
        tasks.push(event.target.id);
        tasks.push(true);
    } else {
        tasks.push(event.target.id);
        tasks.push(false);
    }
       updateRequest(tasks);
    });
    function updateRequest(tasks){
      $.ajax({
        type:'post',
        url:"/update",
        data:{tasks:tasks},
        success:function(data){
           console.log('Successfully Updated');
        },error : function(error){
          console.log(error.responseText)
        }
      });
    }
    })();
    
    (function(){
        // Ajax call to delete Completed Tasks
        $('#delete-btn').on('click', function(){

          if($('input:checkbox:checked').length>0){
            sendResponse();
          }
       });
        function sendResponse() {
          $.ajax({
            type:'post',
            url:"/delete",
            success:function(data){
              location.reload();
            }
          });
        }
     })();
     
    
    // line-through when checkbox is clicked
     (function(){
       var checkboxes = $('.chkbox');
       var descriptions = $('.descriptions');
       var dates = $('.timestamp')
       for(let i = 0;i < checkboxes.length;i++){
         $(checkboxes[i]).on('click', function(){
            if(checkboxes[i].checked){
                descriptions[i].style.textDecoration = 'line-through';
                dates[i].style.textDecoration = "line-through";
            } else {
            descriptions[i].style.textDecoration = 'none';
            dates[i].style.textDecoration = "none";
            }
         });
       }
     })();
    
 