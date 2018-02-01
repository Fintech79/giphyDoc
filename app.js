
var coolcats = ['coolcats', 'hungrycats', 'cat in a hat', 'simbacat', 'aquacat', 'supacat','alphacat', 'snoopcat','aquacat' ];
var queryURL="https://api.giphy.com/v1/gifs/search?api_key=yfz9QKH9Q7QsJysIjnee8bMcgrPiY0iD&q=lions&limit=25&offset=0&rating=G&lang=en"
   
    $.ajax({
   url: queryURL,
   method: 'GET'
    }).done(function(response) { 
      $('.gifs').empty();
    	console.log(response);
        for (var i = 0; i < response.data.length; i++)
        {
            var newImg = $('<img>');
      newImg.addClass('clickable');
            newImg.attr('src', response.data[i].images.fixed_height_still.url);
      newImg.attr('data-state', 'still');
      newImg.attr('data-still', response.data[i].images.fixed_height_still.url );
      newImg.attr('data-moving', response.data[i].images.fixed_height.url )
            $('.gifs').append(newImg)

        
        }
        
    });

  $(document).on('click', '.clickable', function(){
        var still = $(this).attr('data-still');
        var moving = $(this).attr('data-moving');
        var state = $(this).attr('data-state');

      if (state === 'still') {
        $(this).attr('src', moving);
        $(this).attr('data-state', 'moving');
      } else if (state === 'moving') {
        $(this).attr('src', still);
        $(this).attr('data-state', 'still');
      }
  });