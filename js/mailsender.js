$( document ).ready(function() {
    console.log( "ready!" );
    var myform = $("form#eform");
	myform.submit(function(event) {

	event.preventDefault();
    
    var rawData = {
        name: $('#id-name').val(),
        email: $('#id-email').val(),
        text: $('#id-text').val()
    };

    var contactData = JSON.stringify(rawData);
    
    var url = '/mailsender/send';
	//var url = '//127.0.0.1:8080/send';
    event.preventDefault();
	$('#send-fb').text("Отправить");
    $.ajax
    ({
        type: "POST",
        url: url,
        dataType: 'json',
		contentType:'application/json',
        async: true,
        data: contactData,

        success: function () {
		$("#form-fields").animate({opacity: 0.0}, 1000, 'linear', 
		function(){
			$('#thanks-for-feedback').fadeIn(800);
			}
		);
		$('#send-fb').text("Отправить");
		$('#send-fb').prop("disabled", true);
		},
		error:function(err) {
		alert("Ошибка отправки отзыва!\r\n Response:\n " + JSON.stringify(err));
		$('#send-fb').text("Отправить");
		}
		
    }).done(function () {
		$("#form-fields").animate({opacity: 0.0}, 1000, 'linear', 
		function(){
			$('#thanks-for-feedback').fadeIn(800);
			}
		);
		$('#send-fb').text("Отправить");
		$('#send-fb').prop("disabled", true);
		});
	 return false;
});
$('#myModalNorm').on('shown.bs.modal', function(){
        $('#form-fields').css("opacity", "1.0");
		$('#send-fb').text("Отправить");
		$('#send-fb').prop("disabled", false);
		$('#thanks-for-feedback').hide();
});
});