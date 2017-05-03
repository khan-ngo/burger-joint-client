'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')
const config = require('../config')

const onCreateJob = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createJob(data)
  .then(ui.onCreateJobSuccess)
  .catch(ui.onCreateJobError)
}

const onGetJob = function (event) {
  event.preventDefault()
  const job = getFormFields(event.target).job
  api.show(job.id)
    .then(ui.onGetJobSuccess)
    .catch(ui.onGetJobFailure)
}

const onDeleteJob = function (event) {
  event.preventDefault()
  const job = getFormFields(event.target).job
  api.destroy(job.id)
    .then(ui.onDeleteJobSuccess)
    .catch(ui.onDeleteJobFailure)
}

const onUpdateJob = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.update(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateJobFailure)
}

const onGetJobs = function () {
  event.preventDefault()
  $('.content').empty()
  api.getJobs()
    .then(ui.onGetJobsSuccess)
    .catch(ui.onGetJobsFailure)
}

const onClearJobs = function (event) {
  event.preventDefault()
  $('.content').empty()
}

const deleteTask = function (event) {
  event.preventDefault()
  $.ajax({
    url: config.apiOrigin + '/jobs/' + (event.target).getAttribute('data-id'),
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
  .then(ui.onDeleteTaskSuccess)
  .catch(ui.onDeleteTaskFailure)
}

const markComplete = function (event) {
  event.preventDefault()
  // const checked = event.target.checked
  // console.log(checked)

  $.ajax({
    url: config.apiOrigin + '/jobs/' + (event.target).getAttribute('data-id'),
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'job': {
        'completed': true
      }
    }
  }).done(function () {
    onGetJobs()
  }).fail(function (error) {
    console.error(error)
    onGetJobs()
  })
}

const addHandlers = () => {
  $('#job-create').on('submit', onCreateJob)
  $('#jobs-search').on('submit', onGetJobs)
  $('#job-search').on('submit', onGetJob)
  $('#job-delete').on('submit', onDeleteJob)
  $('#job-update').on('submit', onUpdateJob)
  $('#job-create-modal').on('submit', onCreateJob)
  $('#getJobsButton').on('click', onGetJobs)
  $('#clearJobsButton').on('click', onClearJobs)
  $('body').on('click', '.task-close', deleteTask)
  $('body').on('click', '.edit', markComplete)
}

module.exports = {
  addHandlers,
  onGetJobs
}
