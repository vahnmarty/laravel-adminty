$(function(){
	$(".v-row").each(function(){
		var high = 0;

		$('.v-equal').each(function(i, item){
			if($(this).height() > high){
				high = $(this).height();
			}
			console.log(high);
		});

		$('.v-row .v-equal').css('height', high);

	});
});

$(function(){
	$('select').each(function(i, item){
		var select = $(this);
		if (typeof select.data('selected') !== 'undefined') {
			if(select.data('selected') != ''){
				select.val(select.data('selected'));
			}
		}
	});
});