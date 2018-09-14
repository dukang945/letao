$(function(){

$.ajax({
	type:'get',
    url:'/category/queryTopCategory',
	success:function (res) {
		console.log(res);
		// console.log(template('leftCateTpl',{data:res.rows}));
        $('#leftCate').html(template('leftCateTpl',{data:res.rows}));
        if(res.rows.length>0){
            var id = res.rows[0].id;
            $.ajax({
                type: 'get',
                url: '/category/querySecondCategory',
                data: {id:id},
                success:function (res) {
                    $('#leftCate').find('a').eq(0).addClass('active');
                    $('#rightCate').html(template('rightTpl', {data: res.rows}));
                }
            })
        }

    }
});
$('#leftCate').on('tap','a', function () {
    var id = $(this).attr('data-id');
    $(this).addClass('active').siblings().removeClass('active');
    $.ajax({
        type: 'get',
        url: '/category/querySecondCategory',
        data: {id: id},
        success: function (res) {
            console.log(res);
            $('#rightCate').html(template('rightTpl', {data: res.rows}));
        }
    })
} )
})