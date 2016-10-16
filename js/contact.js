$(document).ready(function(){
	$('input').click(function() {
	    tmpValue = $(this).val();

	    if ((tmpValue === 'Full Name') || 
	        (tmpValue === 'Email') ||
	        (tmpValue === 'Subject') ||
	        (tmpValue === 'Message') ||
	      $(this).val('')
	 
	});

	$('input').focusout(function() {
    if ( $(this).val() === '' ) {
      $(this).val(tmpValue);
    }
    tmpValue = '';
  	});

});