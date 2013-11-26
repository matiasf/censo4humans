
function initScrollUp() {
	$.scrollUp({
		animation: 'fade',
		scrollImg: { active: true, type: 'background', src: 'assets/images/top.png' }
	});
};

function goToByScroll(id) {
	$('html,body').animate({scrollTop: $("#" + id).offset().top},'slow');
};