$(function () {

	$('#loginBtn').on('tap', function () {
		var data = {
			username: $.trim($('[name="username"]').val()),
			password: $.trim($('[name="password"]').val())
		}
		if (!data.username || !data.password) {
			mui.toast('请填写完整信息');
			return;
		}
		$.ajax({
			type: 'post',
			url: '/user/login',
			data: data,
			success: function (res) {
				console.log(res);
				if (res.success) {
					$('#loginBtn').html('登录成功');
					location.href='user.html';
					
				}else{
					mui.toast(res.message);
				}
			}
		})
	})
})