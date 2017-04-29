'use strict'

const app = require('../app.js')
const events = require('../events')
const store = require('../store')

// Task API
// create task



const createTask = function (data) {
return   $.ajax({
    url: config.apiOrigin + '/tasks',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    data
})
}

const getUserTasks = function () {
  return $.ajax({
    url: config.apiOrigin + '/tasks',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    dataType: 'json'
  })
  .then(ui.getUserTasksSuccess)
  .catch(ui.getUserTasksFailure)
}

const deleteTask = function (date) {
return $.ajax({
    url: config.apiOrigin + '/tasks/' + $(event.target).attr('data-id'),
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
})


const markComplete = function(data) {
    return $.ajax({
    url: myApp.baseUrl + '/tasks/' + $(event.target).attr('data-id'),
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data: {
      "task":{
        "completed": check
      }
    }
  })
}



module.exports = {
  index,
  markComplete
}
