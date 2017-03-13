$(function(){

    $.getJSON('js/category.json', function(data) {
    	for(var i in data){
            $('#category-list').append('<li class="menu-list-item"><a class="menu-list-link" href="#">' + data[i].Title + '</a></li>');
        }
    });

    $.getJSON('js/events.json', function(data) {
		for(var i in data){
	        $('#events-list').append('<article class="events-wrap margin-bottom"><div class="margin-bottom clearfix"><span class="events-date right">' + data[i].EventDate + ' - '  + data[i].EndDate + '</span></div><a class="events-wrap-link margin-bottom" href="#"><h5 class="events-wrap-title">' + data[i].Title + '</h5></a><div class="events-text-bottom clearfix"><span class="left">' + data[i].Location + '</span><span class="events-text-interval right">через месяц</span></div></article>');
	    }
	});

	$.getJSON('js/news.json', function(data) {
		for(var i in data){
	        $('#article-list').append('<li class="article-item clearfix"><a class="article-img left" href="#">' + data[i].PublishingRollupImage  + '</a><div class="article-info clearfix"><div class="article-title-wrap margin-bottom"><span class="article-date right">' + data[i].PublishedDate + '</span><a class="article-title-link" href="#"><h3 class="article-title">' + data[i].Title + '</h3></a></div><p class="article-text">Повседневная практика показывает, что укрепление и развитие структуры требуют от нас анализа существенных финансовых и административных условий. Таким образом начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки новых предложений.<a class="article-link" href="#"> Читать далее >></a></p></div></li>');
	    }
	});

	$(function(){
        $("#datepicker").datepicker();
   });

});