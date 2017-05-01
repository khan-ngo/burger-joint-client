'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example')

const myApp = {
baseUrl: 'https://tiger-tiger.herokuapp.com',
}

const clear = function () {
  $('.content').empty()
}

const onCreateTask = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(formData)
  api.createTask(data)
  .then(ui.createTaskSuccess)
  .catch(ui.createTaskFailure)
}

const displayTasks = function (response) {
  clear()
  console.log('Response.Task: ', response.tasks)
  const responseTasks = response.tasks
  const taskListingTemplate = require('./task-listing.handlebars')
  $('.content').append(taskListingTemplate({responseTasks}))
}

const onDeleteTask = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('onDeleteTask event:', event)
  if (!store.user) {
    console.error('wrong user')
    api.deleteTask(data)
    .then(ui.deleteTaskSuccess)
    .catch(ui.deleteTaskFailure)
  }
}

const onmarkComplete = function(event) {
  event.preventDefault()
  const data = getFormFields(this)

  const check = event.target.checked
  console.log(check)
  if (!store.user) {
    console.error('wrong')

  api.markComplete()
  .then(ui.markCompleteSuccess)
  .catch(ui.markCompleteFailure)
  }
}

$(document).ready(function(){
  //tasks selectors
  $('#add-task-button').on('click', createTask)
  $('body').on('click', '.task-close', onDeleteTask)
  $('body').on('click', '.edit', markComplete)

})
