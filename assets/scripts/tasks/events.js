'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /tasks
// button is clicked
const onGetTasks = function (event) {
  event.preventDefault()

  api.index()
    .then(ui.onSuccess)
    .catch(ui.onError)
}
const onGetTask = function (event) {
  event.preventDefault()
  const task = getFormFields(event.target).task

  if (task.id.length !== 0) {
    api.show(task.id)
      .then(ui.onSuccess)
      .catch(ui.onError)
  } else {
    console.log('Please provide a task id!')
  }1``
}
const onDeleteTask = function (event) {
  event.preventDefault()
  const task = getFormFields(event.target).task

  if (task.id.length !== 0) {
    api.destroy(task.id)
    .then(ui.onSuccess)
    .catch(ui.onError)
  } else {
    console.log('Please provide a task id!')
  }
}

const onUpdateTask = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const task = data.task
  console.log('You are inside onUpdateTask Function.')
  console.log('event.target: ', event.target)

  if (task.id.length !== 0) {
    api.update(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError)
  } else {
    console.log('Please provide ID to update task data!')
  }
}

// const onUpdateTask = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   const task = data.task
//
//   if (task.id.length !== 0) {
//     api.update(data)
//       .then(ui.onUpdateSuccess)
//       .catch(ui.onError)
//   } else {
//     console.log('Please provide a task id!')
//   }
// }

const onCreateTask = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const task = data.task
  console.log('Your inside onCreate Task. eventtaget is : ', event.target)

  if (task.title.length !== 0 && task.author.length !== 0) {
    api.create(data)
    .then(ui.onSuccess)
    .catch(ui.onError)
  } else {
    console.log('Please provide required data to Create!')
  }
}

const addHandlers = () => {
  $('#tasks-search').on('submit', onGetTasks)
  $('#task-search').on('submit', onGetTask)
  $('#task-delete').on('submit', onDeleteTask)
  $('#task-update').on('submit', onUpdateTask)
  $('#task-create').on('submit', onCreateTask)
}

module.exports = {
addHandlers
}
