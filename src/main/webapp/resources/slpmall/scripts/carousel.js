var timer = null;
var offset = 5000;
var index = -1; /* -1第一个，0第二个... */

//大图交替轮换
function slideImage(i){
    var id = 'image-'+ i;
    $('#'+ id).animate({opacity: 1}, 800, function(){
		$(this).find('.word').animate({height: 'show'}, 'slow');
	}).show()
	.siblings(':visible')
	.find('.word').animate({height: 'hide'},'fast',function(){
		$(this).parent().animate({opacity: 0}, 800).hide();
	});
}
//bind thumb a
function hookThumb(){    
    $('#thumbs li a').bind('click', function(){
		if (timer) {
			clearTimeout(timer);
		}                
		var id = this.id;            
		index = getIndex(id);
		rechange(index);
		slideImage(index); 
		timer = window.setTimeout(auto, offset);  
		this.blur();            
		return false;
	});
}
//bind next/prev img
function hookBtn(){
    $('#thumbs li i').filter('#play_prev,#play_next').bind('click', function(){
		if (timer){
			clearTimeout(timer);
		}
		var id = this.id;
		if (id == 'play_prev') {
			index--;
			if (index < 0) index = 4;
		}else{
			index++;
			if (index > 4) index = 0;
		}
		rechange(index);
		slideImage(index);
		timer = window.setTimeout(auto, offset);
	});
}

function bighookBtn(){
    $('#bigpicarea p span').filter('#big_play_prev,#big_play_next').bind('click', function(){
		if (timer){
			clearTimeout(timer);
		}
		var id = this.id;
		if (id == 'big_play_prev') {
			index--;
			if (index < 0) index = 4;
		}else{
			index++;
			if (index > 4) index = 0;
		}
		rechange(index);
		slideImage(index);
		timer = window.setTimeout(auto, offset);
	});
}

//get index
function getIndex(v){
	var index = v.indexOf("-");
    return v.substring(index+1);
}

function rechange(loop){
    var id = 'thumb-'+ loop;
    $('#thumbs li a.current').removeClass('current');
    $('#'+ id).addClass('current');
}

function auto(){
    index++;
    if (index > 4){
        index = 0;
    }
    rechange(index);
    slideImage(index);
    timer = window.setTimeout(auto, offset);
}

$(function(){    
    //change opacity
    $('div.word').css({opacity: 0});
    auto();  
    hookThumb(); 
    hookBtn();
	bighookBtn()
    
});