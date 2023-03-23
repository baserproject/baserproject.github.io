if(location.pathname === '/') {
	location.pathname = '/5/';
}

let dir = location.pathname.split('/').slice(0, -1).join('/') + '/';
let isDeep = (location.pathname.split('/').slice(0, -1).length > 3);
$(".local-navi > ul > li").each(function(){
	if(!$(this).find('> a').attr('href')) return;
	if(isDeep) {
		if($(this).find('> a').attr('href') === '/5/') return;
		if(dir.search($(this).find('> a').attr('href')) !== -1) {
			$(this).find('ul').show();
		}
	} else {
		if(dir === $(this).find('> a').attr('href')) {
			$(this).find('ul').show();
		}
	}
});

$(".local-navi a").each(function(){
	if(!$(this).attr('href')) return;
	if(isDeep) {
		if($(this).attr('href') === '/5/') return;
		if($(this).attr('href').split('/').length < 5) return;
		if(location.pathname.search($(this).attr('href')) !== -1) {
			$(this).addClass('current');
		}
	} else {
		if($(this).attr('href') === location.pathname) {
			$(this).addClass('current');
		}
	}
});

