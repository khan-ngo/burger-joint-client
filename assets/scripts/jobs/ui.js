'use strict'

const showJobsTemplate = require('../templates/job.listing.handlebars')
const jobsEvents = require('./events.js')
const onSuccess = function (data) {
  if (!data) {
    console.warn('Either you deleted something, or something went wrong.')
  } else if (data.task) {
    console.log(data.book)
  } else {
    console.table(data.books)
  }
  jobsEvents.onGetJobs()
}

const onSuccessNoContent = function () {
  console.log('Your request was successful, and returned no content')
}

const onError = function (response) {
  console.error(response)
}

const onCreateJobSuccess = function (data) {
  // if (!data) {
  //   console.warn('Either you deleted something, or something went wrong.')
  // } else if (data.job) {
  //   console.log(data.job)
  // } else {
  //   console.table(data.job)
  // }

  $(this).find('form').trigger('reset')
  $('#job-create-modal').modal('hide')

  $('#addTaskMsgSuccess').html('New task Added.')
  setTimeout(function () {
    $('#addTaskMsgSuccess').fadeOut(800)
  }, 1000)
}

const onCreateJobError = function (data) {
  $('#job-create-modal-form').trigger('reset')
  $('#addTaskMsgError').html('Task already exist. Add a NEW task.')
  setTimeout(function () {
    $('#addTaskMsgError').fadeOut(1000)
  }, 1000)
}

const onGetJobsFailure = (error) => {
  console.error('onGetJobsFailure: ', error)
}

const onGetJobSuccess = function () {
  console.log('onGetJobSuccess')
}
const onGetJobFailure = (error) => {
  console.error('onGetJobFailure: ', error)
}
const onDeleteJobSuccess = function () {
  console.log('onDeleteJobSuccess')
  jobsEvents.onGetJobs()
}
const onDeleteJobFailure = (error) => {
  console.error('onDeleteJobFailure: ', error)
}

const onGetJobsSuccess = (data) => {
  console.log('onGetJobsSuccess: ', data)

  const showJobsHtml = showJobsTemplate({ jobs: data.jobs })
  $('.content').append(showJobsHtml)
}

const failure = (error) => {
  console.error('failure: ', error)
}

const getUserTasksSuccess = function (data) {
  // displayTasks(data)
  console.log('getUserTasksSuccess data: ', data)
}

const getUserTasksFailure = function (error) {
  console.error('getUserTasksFailure: ', error)
}
const onDeleteTaskSuccess = function () {
  jobsEvents.onGetJobs()
}
const onDeleteTaskFailure = function (error) {
  console.error('onDeleteTaskFailure: ', error)
  jobsEvents.onGetJobs()
}

const markCompleteSuccess = function (error) {
  console.error('markCompleteFailure: ', error)
  jobsEvents.onGetJobs()
}

const markCompleteFailure = function (error) {
  console.error('markCompleteFailure: ', error)
  jobsEvents.onGetJobs()
}

module.exports = {
  onCreateJobSuccess,
  onCreateJobError,
  onGetJobsSuccess,
  onGetJobsFailure,
  onGetJobSuccess,
  onGetJobFailure,
  onDeleteJobSuccess,
  onDeleteJobFailure,
  onSuccess,
  onSuccessNoContent,
  onError,
  failure,
  getUserTasksSuccess,
  getUserTasksFailure,
  onDeleteTaskSuccess,
  onDeleteTaskFailure,
  markCompleteSuccess,
  markCompleteFailure
}
