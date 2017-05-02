'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

//API
const myApp = {
baseUrl: 'https://tiger-tiger.herokuapp.com',
};

//Task API
//clear view content
let clear = function(){
  $('.content').empty();
};
//create task
let createTask = function(e) {
  e.preventDefault();
  var formData = new FormData($("#add-task")[0]);
  console.log(formData);
  $.ajax({
    url: myApp.baseUrl + '/tasks',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    processData: false,
    contentType: false,
    data: formData,
  }).done(function(data) {
    console.log(data);
    getUserTasks();
    console.log('create task');
    // myApp.task = data.task;
    // console.log('end create task');
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};
//update display of tasks
let displayTasks = function(response){
  clear();
  console.log(response.tasks);
  let responseTasks = response.tasks;
  let taskListingTemplate = require('./task-listing.handlebars');
  $('.content').append(taskListingTemplate({responseTasks}));
};
//get tasks
let getUserTasks = function(){
  $.ajax({
    url: myApp.baseUrl + '/tasks',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    dataType: 'json'
  })
  .done(function(data){
    displayTasks(data);
    console.log(data);
  })
  .fail(function(jqxhr){
    console.error(jqxhr);
  });
};
//delete tasks
let deleteTask = function(e) {
  e.preventDefault();
  console.log(e);
  if (!myApp.user) {
    console.error('wrong');
  }
  $.ajax({
    url: myApp.baseUrl + '/tasks/' + $(e.target).attr('data-id'),
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    contentType: false,
    processData: false,
  }).done(function() {
    console.log('task deleted');
    getUserTasks();
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

//mark complete
let markComplete = function(e) {
  e.preventDefault();
  let check = e.target.checked;
  console.log(check);
  if (!myApp.user) {
    console.error('wrong');
  }
  $.ajax({
    url: myApp.baseUrl + '/tasks/' + $(e.target).attr('data-id'),
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    data: {
      "job":{
        "completed": check
      }
    }
  }).done(function() {
    console.log('task edit');
    getUserTasks();
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

//USER API



$(document).ready(function(){
  //tasks selectors
  $('#add-task-button').on('click', createTask);
  $('body').on('click', '.task-close', deleteTask);
  $('body').on('click', '.edit', markComplete);

  //user account selectors
  $('#sign-up-button').on('click', signup);
  $('#sign-in-button').on('click', signin);
  $('#change-password-button').on('click', changePassword);
  $('#logout').on('click', logout);
});
