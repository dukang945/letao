$.ajax({
	type: 'get',
	url: '/user/queryUserMessage',
	async: false,
	success: function (res) {
		if (res.error == 400) {
			location.href = "login.html";
		}
	}
});



$(function () {
	$('#modifyBtn').on('tap', function () {
		var data = {
			oldPassword: $.trim($('[name="originPass"]').val()),
			newPassword: $.trim($('[name="newPass"]').val()),
			reNewPassword: $.trim($('[name="sureNewPass"]').val()),
			vCode: $.trim($('[name="checkCode"]').val())
		};
		console.log(data.vCode);

		if (!data.oldPassword) {

			mui.toast('请输入原密码');

			return;

		}

		if (!data.newPassword) {
			mui.toast('请输入新密码');
			return;

		}

		if (data.newPassword != data.reNewPassword) {
			mui.toast('密码两次输入的不一致');
			return;

		}

		$.ajax({
			url: '/user/updatePassword',
			type: 'post',
			data: data,
			success: function (res) {
				console.log(res);
				if (res.success) {
					location.href = "login.html";
				} else {
					mui.toast('密码修改失败:' + res.message);

				}

			}
		})
	});
	$('#getCheckCode').on('tap', function(){
		$.ajax({
			type:'get',
			url:'/user/vCodeForUpdatePassword',
			success:function(result){
				console.log(result.vCode);
			}
		});
	});

})