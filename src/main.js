import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
//import { **insert prototype name** } from './astronaut-tracker.js';

$(document).ready(function() {
  $('#PlayersDidTheft').click(function(){
    $('.showText').empty();
    $('.showList').empty();
    $.ajax({
      url:`http://nflarrest.com/api/v1/crime/topPlayers/Theft?param=Name`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showText').text(`The following players are alleged to have committed theft:`);        for(let i = 0; i < response.length; i++){
          let element = `${response[i].Name}`
          $('.showList').append(" " + '<li>' + element + ', ' +  '</li>');
        }
      },
      error: function() {
        $('#errors').text("There was an error processing your request.  Please try again.")
      }
    });
  });

  $('#PlayersDidMurder').click(function(){
    $('.showText').empty();
    $('.showList').empty();
    $.ajax({
      url: `http://nflarrest.com/api/v1/crime/topPlayers/Murder?param=Name`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showText').text(`The following players are alleged to have committed murder:`);        for(let i = 0; i < response.length; i++){
          let element = `${response[i].Name}`
          $('.showList').append(" " + '<li>' + element + ', ' +  '</li>');
        }
      },
      error: function() {
        $('#errors').text("There was an error processing your request.  Please try again.")
      }
    })
  });

  $('#PlayersDidDUI').click(function(){
    $('.showText').empty();
    $('.showList').empty();
    $.ajax({
      url: `http://nflarrest.com/api/v1/crime/topPlayers/DUI?param=Name`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showText').text(`The following players are alleged to have committed a DUI:`);        for(let i = 0; i < response.length; i++){
          let element = `${response[i].Name}`
          $('.showList').append(" " + '<li>' + element + ',' +  '</li>');
        }
      },
      error: function() {
        $('#errors').text("There was an error processing your request.  Please try again.")
      }
    })
  });

$('#PlayersDidDrug').click(function(){
  $('.showText').empty();
  $('.showList').empty();
  $.ajax({
    url: `http://nflarrest.com/api/v1/crime/topPlayers/Drugs?param=Name`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      $('.showText').text(`The following players are alleged to have drug possession:`);        for(let i = 0; i < response.length; i++){
        let element = `${response[i].Name}`
        $('.showList').append(" " + '<li>' + element + ',' +  '</li>');
      }
    },
    error: function() {
      $('#errors').text("There was an error processing your request.  Please try again.")
    }
  })
});

$('#PlayersDidDrug').click(function(){
  $('.showText').empty();
  $('.showList').empty();
  $.ajax({
    url: `http://nflarrest.com/api/v1/crime/topPlayers/Drugs?param=Name`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      $('.showText').text(`The following players are alleged to have drug possession:`);        for(let i = 0; i < response.length; i++){
        let element = `${response[i].Name}`
        $('.showList').append(" " + '<li>' + element + ',' +  '</li>');
      }
    },
    error: function() {
      $('#errors').text("There was an error processing your request.  Please try again.")
    }
  })
});

$('#PlayersDomAbuse').click(function(){
  $('.showText').empty();
  $('.showList').empty();
  $.ajax({
    url: `http://nflarrest.com/api/v1/crime/topPlayers/Domestic%20violence?param=Name`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      $('.showText').text(`The following players are alleged to have commited domnestic violence:`);        for(let i = 0; i < response.length; i++){
        let element = `${response[i].Name}`
        $('.showList').append(" " + '<li>' + element + ',' +  '</li>');
      }
    },
    error: function() {
      $('#errors').text("There was an error processing your request.  Please try again.")
    }
  })
});

});
