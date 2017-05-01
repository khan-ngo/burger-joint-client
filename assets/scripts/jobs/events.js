'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api.js')
const ui = require('./ui.js')

// const getFormFields = require('../../../lib/get-form-fields')

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /jobs
// button is clicked

const onUpdateJob = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const job = data.job
  console.log('You are inside onUpdateJob Function.')
  console.log('event.target: ', event.target)

  if (job.id.length !== 0) {
    api.update(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateJobError)
  } else {
    console.log('Please provide ID to update job data!')
  }
}

// const onUpdateJob = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   const job = data.job
//
//   if (job.id.length !== 0) {
//     api.update(data)
//       .then(ui.onUpdateSuccess)
//       .catch(ui.onError)
//   } else {
//     console.log('Please provide a job id!')
//   }
// }

const onCreateJob = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Your inside onCreate Job. eventtaget is : ', data)

  api.createJob(data)
  .then(ui.onCreateJobSuccess)
  .catch(ui.onCreateJobError)
}

const onGetJobs = function (event) {
  event.preventDefault()
  console.log('You clicked on the "Get All Jobs" button!')
  api.index()
    .then(ui.onGetJobsSuccess)
    .catch(ui.onGetJobsError)
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
    console.log('Please provide a book id!')
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

const addHandlers = () => {
  $('#job-create').on('submit', onCreateJob)
  $('#jobs-search').on('submit', onGetJobs)
  $('#job-search').on('submit', onGetJob)

  $('#job-delete').on('submit', onDeleteJob)

  $('#job-update').on('submit', onUpdateJob)
}

module.exports = {
  addHandlers
}
