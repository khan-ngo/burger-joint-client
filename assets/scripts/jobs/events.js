'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateJob = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createJob(data)
  .then(ui.onCreateJobSuccess)
  .catch(ui.onCreateJobFailure)
}

const onGetJob = function (event) {
  event.preventDefault()
  const job = getFormFields(event.target).job
  api.getJob(job.id)
    .then(ui.onGetJobSuccess)
    .catch(ui.onGetJobFailure)
}

const getJobs = function () {
  $('.content').empty()
  api.getJobs()
    .then(ui.onGetJobsSuccess)
    .catch(ui.onGetJobsFailure)
}

const onGetJobs = function (event) {
  event.preventDefault()
  $('.content').empty()
  api.getJobs()
    .then(ui.onGetJobsSuccess)
    .catch(ui.onGetJobsFailure)
}

const onUpdateJob = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateJob(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateJobFailure)
}

// const onClearJobs = function (event) {
//   event.preventDefault()
//   $('.content').empty()
// }

const onDeleteJob = function (event) {
  event.preventDefault()
  const id = (event.target).getAttribute('data-id')
  api.deleteJob(id)
  .then(ui.onDeleteJobSuccess)
  .catch(ui.onDeleteJobFailure)
}

const onMarkComplete = function (event) {
  event.preventDefault()
  const id = (event.target).getAttribute('data-id')
  api.markComplete(id)
  .then(ui.onMarkCompleteSuccess)
  .catch(ui.onMarkCompleteFailure)
}

const addHandlers = () => {
  $('#job-create').on('submit', onCreateJob)
  $('#jobs-search').on('submit', onGetJobs)
  $('#job-search').on('submit', onGetJob)
  $('#job-delete').on('submit', onDeleteJob)
  $('#job-update').on('submit', onUpdateJob)
  $('#job-create-modal').on('submit', onCreateJob)
  $('body').on('click', '.delete-job-button', onDeleteJob)
  $('body').on('click', '.edit', onMarkComplete)
}

module.exports = {
  addHandlers,
  getJobs
}
