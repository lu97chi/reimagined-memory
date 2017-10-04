'use strict';
$(document).ready(function(){
  $('.collapsible').collapsible();
  let video = $('#video');
  let send = $('#send');
  let email = false;
  let username = false;
  function play (){
    let video = $('#video');
    video.get(0).play();
  }
  play();
  function comment1(){
    $('#comment1').removeClass('hideThis');
    localStorage.setItem('comment1', 'saved');
  }
  function comment2(){
    $('#comment2').removeClass('hideThis');
      localStorage.setItem('comment2', 'saved');
  }
  function comment3(){
    $('#comment3').removeClass('hideThis');
      localStorage.setItem('comment3', 'saved');
  }
  function comment4(){
    $('#comment4').removeClass('hideThis');
      localStorage.setItem('comment4', 'saved');
  }

  send.on('click', sending)

  function sending (){
    $('#sendingLoading').removeClass('hideThis');
    $('#textarea').prop('disabled', true);
    setTimeout(function(){
      $('#sendingLoading').addClass('hideThis');
      $('#textarea').val('');
      $('#textarea').prop('disabled', false);
    },3000)
  }

  $('#textarea').keydown(function(e){
    if (e.keyCode == 13 && !e.shiftKey) {
        e.preventDefault()
      if (!$('#textarea').val() == '') {
        sending();
      }
    }
  })

  setInterval(function(){
  localStorage.setItem('seen', $('#video')[0].currentTime)
  },5000)

  if (!localStorage.getItem('comment1')) {
    setTimeout(comment1,4000);
  } else {
      $('#comment1').removeClass('hideThis');
  }
  if (!localStorage.getItem('comment2')) {
    setTimeout(comment2,8000);
  } else {
      $('#comment2').removeClass('hideThis');
  }
  if (!localStorage.getItem('comment3')) {
    setTimeout(comment3,12000);
  } else {
      $('#comment3').removeClass('hideThis');
  }
  if (!localStorage.getItem('comment4')) {
    setTimeout(comment4,16000);
  } else {
      $('#comment4').removeClass('hideThis');
  }

  if (localStorage.getItem('seen') != '') {
    $('#video')[0].currentTime = localStorage.getItem('seen')
  }
  function check(){
    if (email == false || username == false) {
      $('#register').attr('disabled','disabled');
    }else{
      $('#register').removeAttr('disabled');
    }
  }
  $('#email').on('input',function(e){
    email = true;
    check();
  })
  $('#name').on('input',function(e){
    username = true;
    check();
  })

  $('#register').on('click',function(){
    $('#registerLoading').removeClass('hideThis')
    setTimeout(function(){
      $('#registerContainer').addClass('hideThis');
      $('#commentContainer').removeClass('hideThis');
    },3000)

  })

})
