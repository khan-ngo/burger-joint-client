'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')

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
  console.log('onGetJob data: ', job.id)

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

const onGetJobs = function (event) {
  event.preventDefault()

  api.index()
    .then(ui.onGetJobsSuccess)
    .catch(ui.onGetJobsFailure)
}

const onClearJobs = (event) => {
  event.preventDefault()
  ui.clearJobs()
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
}

module.exports = {
  addHandlers
}
