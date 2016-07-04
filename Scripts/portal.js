var portal = {};

function addIdToArray(list){
	var ids = new Array();
	for(var i =0 ; i < list.length ;i++){
		ids.push(list[i].id);
	}
	return ids;
}
/**
 * 弹出modal,并能左右翻页
 * @param array
 * 	左右翻页:模板的id数组
 * @param id
 * 事件监听id
 */
function showDetail(array  , id){
	var currId = 0 ;
	$(id).click(function(e){
		var html = template("show_modal");
		$(document.body).append(html); 
		var index = $.inArray($(e.target).parents('li').data('id') , array) ;
		currId = index ;
		if(currId == 0){
			$('.pop-left').hide();
		}
		
		if(currId == (array.length - 1)){
			$('.pop-right').hide();
		}
		var app = template(array[currId]);
		
		$('#show_content').html(app);
			
		$('.pop-left').click(function(){
			var app = template(array[--currId]);
			$('#show_content').html(app);
			if(currId == 0){
				$('.pop-left').hide();
			}
			$('.pop-right').show();
		});
		
		$('.pop-right').click(function(){
			var app = template(array[++currId]);
			$('#show_content').html(app);
			if(currId == (array.length-1)){
				$('.pop-right').hide();
			}
			$('.pop-left').show();
		});
		
		$('.pop-close').click(function(){
			$('#showModal').remove();
		}); 
	});
}
