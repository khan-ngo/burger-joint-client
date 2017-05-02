'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')
const config = require('../config')

const onCreateJob = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log('Your inside onCreate Job. eventtaget is : ', data)

  api.createJob(data)
  .then(ui.onCreateJobSuccess)
  .catch(ui.onCreateJobError)
}

const onGetJob = function (event) {
  event.preventDefault()
  const job = getFormFields(event.target).job
  // console.log('onGetJob data: ', job.id)

  if (job.id.length !== 0) {
    api.show(job.id)
    .then(ui.onGetJobSuccess)
    .catch(ui.onGetJobFailure)
  } else {
    console.log('Please provide a job id!')
  }
}

const onDeleteJob = function (event) {
  event.preventDefault()
  const job = getFormFields(event.target).job

  if (job.id.length !== 0) {
    api.destroy(job.id)
    .then(ui.onDeleteJobSuccess)
    .catch(ui.onDeleteJobFailure)
  } else {
    console.log('Please provide a job id!')
  }
}

const onUpdateJob = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const job = data.job
  console.log('You are inside onUpdateJob Function.')
  console.log('event.target: ', event.target)

  if (job.id.length !== 0) {
    api.update(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateJobFailure)
  } else {
    console.log('Please provide ID to update job data!')
  }
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
  // if (!current.user) {
  //   console.error('wrong')
  // }
  const checked = event.target.checked
  console.log(checked)

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
    console.log('task edit')
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
