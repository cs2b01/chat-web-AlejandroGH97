function getData(){
        $('#loading').show();
        $('#fail').hide();
        $('#success').hide();
        var username = $('#username').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "username": username,
                "password": password
            });

        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            statusCode:{
              401: function(response){
                  $('#loading').hide();
                  $('#fail').show();
                },
              200: function(response){
                  var id = response['id'];
                  $('#loading').hide();
                  $('#success').show();
                  window.location.href = "/static/chat.html";
                  }
                }
        });
    }
