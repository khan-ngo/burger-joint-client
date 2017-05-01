'use strict'

const config = require('../config')
const ui = require('./ui')
const store = require('../store')
const events = require('./events')

const createTask = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/tasks',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getUserTasks = function () {
  return $.ajax({
    url: config.apiOrigin + '/tasks',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    dataType: 'json'
  })
  .then(ui.getUserTasksSuccess)
  .catch(ui.getUserTasksFailure)
}

const deleteTask = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/tasks/' + $(event.target).attr('data-id'),
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const markComplete = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/tasks/' + $(event.target).attr('data-id'),
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'task': {
        'completed': events.check
      }
    }
  })
}

module.exports = {
  createTask,
  getUserTasks,
  deleteTask,
  markComplete
}
