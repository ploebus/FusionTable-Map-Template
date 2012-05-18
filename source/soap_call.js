var assessorUrl = 'http://www.acgov.org';

var errorObject;

function getAPN(address)
	{
		//console.log(address);
		var soapMessage = 
		'<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><AddrQuery xmlns="http://acgov.org/ACGISWS"><strAddr>' + address + '</strAddr></AddrQuery></soap:Body></soap:Envelope>;'
		
		
		
		$.ajax({
			url:"./proxy.php",
			type:"POST",
			success:parseResult,
			error:function(jqXHR,textStatus,errorThrown){
				errorObject = jqXHR;
				alert("status:" + textStatus+ " errorThrown: " + errorThrown);
				alert(jqXHR.responseText);
			},
			contentType:"text/xml; charset =\"utf-8\""
			
		});
		return false;
	}

function parseResult(xmlHttpRequest, status){
	//alert(status);
	$(xmlHttpRequest.responseXML)
	.find('Data')
	.each(function(){
		var APN = $(this).find('Field1').text();
		console.log(APN);
	})
}
