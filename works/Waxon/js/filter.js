$(document).ready(function() {
  $("#project-filter a").on('click',function() {
    let dataAttr = $(this).attr('data-name');
    $('.our_projects__wrap_item__wraper').css('display','none');
    $('.'+dataAttr).css('display','block');
    return false;
  });
  // $('#load_more_project').on('click',function(){
  // 	let element = $('#load_more_project_result').html();
  // 	// let result = $('#load_more_project_result').html();
  // 	$('#load_more_project_result').html(result + '<h1>test</h1>');
  // 	// $('#load_more_project_result').toggle('fast');

  // 	return false;
  // });
    $('#load_more_project').on('click',function(){
    let element = $('.web-desing').html();
    $('#load_more_project_result').append(element);
    // $('#load_more_project_result').toggle('fast');
    return false;
  })
    $('#top-search').on('click',function(){
       return false; 
    });
});