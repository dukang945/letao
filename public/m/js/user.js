$.ajax({
	type:'get',
	url:'/user/queryUserMessage',
	async:false,
	success:function(res){
		if (res.error == 400) {
			location.href ="login.html";
		}
		userinfo = res;
	}
});

$(function () {
	var html = template('userTpl',userinfo);
	$('#user').html(html);
	$('#logout').on('tap',function(){
		console.log(1)
		$.ajax({
			type:'get',
			url:'/user/logout',
			success:function(res){
				if (res.success) {
					location.href ="index.html";
				}
			}
		})
	})
});