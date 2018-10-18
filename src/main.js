import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
//import { **insert prototype name** } from './nflArrestTracker.js';

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
        $('.showText').text(`The following players are alleged to have committed theft:`);
        for(let i = 0; i < response.length; i++) {
          let element = `${response[i].Name}`;
          if (i < response.length - 1) {
            $('.showList').append(" " + '<li>' + element + ', ' +  '</li>');
          }
          else {
            $('.showList').append(" " + '<li>' + element + '.' + '</li>');
          }
        }
      },
      error: function() {
        $('#errors').text("There was an error processing your request.  Please try again.");
      }
    });
  });

  $('#PlayersDidMurder').click(function(){
    $('.showText').empty();
    $('.showList').empty();
    let result1;
    let result2;
    $.when(
      $.ajax({
        url: `http://nflarrest.com/api/v1/crime/topPlayers/Murder?param=Name`,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function(response) {
          result1 = response;
        },
        error: function() {
          $('#errors').text("There was an error processing your request.  Please try again.");
        }
      }),
      
      $.ajax({
        url: `http://nflarrest.com/api/v1/crime/topPlayers/Murder,%20gun?param=Name`,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function(response) {
          result2 = response;
        },
        error: function() {
          $('#errors').text("There was an error processing your request.  Please try again.");
        }
      }),

    ).then(function() {
      $('.showText').text(`The following players are alleged to have committed murder:`);
      for(let i = 0; i < result1.length; i++) {
        let element = `${result1[i].Name}`;
        if (i < result1.length) {
          $('.showList').append(" " + '<li>' + element + ', ' +  '</li>');
        }
      }
      for(let i = 0; i < result2.length; i++) {
        let element = `${result2[i].Name}`;
        if (i < result2.length - 1) {
          $('.showList').append(" " + '<li>' + element + ', ' +  '</li>');
        }
        else {
          $('.showList').append(" " + '<li>' + element + '.' + '</li>');
        }
      }
    });
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
        $('.showText').text(`The following players are alleged to have committed a DUI:`);
        for(let i = 0; i < response.length; i++) {
          let element = `${response[i].Name}`;
          if (i < response.length - 1) {
            $('.showList').append(" " + '<li>' + element + ', ' +  '</li>');
          }
          else {
            $('.showList').append(" " + '<li>' + element + '.' + '</li>');
          }
        }
      },
      error: function() {
        $('#errors').text("There was an error processing your request.  Please try again.");
      }
    });
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
        $('.showText').text(`The following players are alleged to have drug possession:`);
        for(let i = 0; i < response.length; i++) {
          let element = `${response[i].Name}`;
          if (i < response.length - 1) {
            $('.showList').append(" " + '<li>' + element + ', ' +  '</li>');
          }
          else {
            $('.showList').append(" " + '<li>' + element + '.' + '</li>');
          }
        }
      },
      error: function() {
        $('#errors').text("There was an error processing your request.  Please try again.");
      }
    });
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
        $('.showText').text(`The following players are alleged to have commited domnestic violence:`);
        for(let i = 0; i < response.length; i++) {
          let element = `${response[i].Name}`;
          if (i < response.length - 1) {
            $('.showList').append(" " + '<li>' + element + ', ' +  '</li>');
          }
          else {
            $('.showList').append(" " + '<li>' + element + '.' + '</li>');
          }
        }
      },
      error: function() {
        $('#errors').text("There was an error processing your request.  Please try again.");
      }
    });
  });

  $('#PlayersDogFighting').click(function(){
    $('.showText').empty();
    $('.showList').empty();
    $.ajax({
      url: `http://nflarrest.com/api/v1/crime/topPlayers/Dogfighting?param=Name`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showText').text(`The following players are alleged to have commited dogfighting:`);
        for(let i = 0; i < response.length; i++) {
          let element = `${response[i].Name}`;
          if (i < response.length - 1) {
            $('.showList').append(" " + '<li>' + element + ', ' +  '</li>');
          }
          else {
            $('.showList').append(" " + '<li>' + element + '.' + '</li>');
          }
        }
      },
      error: function() {
        $('#errors').text("There was an error processing your request.  Please try again.");
      }
    });
  });

  $('#Teams').click(function(){
    $('.showText').empty();
    $('.showList').empty();
    $.ajax({
      url: `http://nflarrest.com/api/v1/team?param=Team_preffered_name`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showText').text(`The following teams contain players who have been arrested:`);
        for(let i = 0; i < response.length; i++) {
          let element = `${response[i].Team_preffered_name}`;
          if (i < response.length - 1) {
            $('.showList').append(" " + '<li>' + element + ', ' +  '</li>');
          }
          else {
            $('.showList').append(" " + '<li>' + element + '.' + '</li>');
          }
        }
      },
      error: function() {
        $('#errors').text("There was an error processing your request.  Please try again.");
      }
    });
  });

});
