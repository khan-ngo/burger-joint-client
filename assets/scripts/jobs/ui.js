'use strict'

const showJobsTemplate = require('../templates/job.listing.handlebars')
const api = require('./api.js')

const onSuccess = function (data) {
  refreshHandlebar()
}

const refreshHandlebar = function () {
  $('.content').empty()
  api.getJobs()
    .then(onGetJobsSuccess)
    .catch(onGetJobsFailure)
}

const onGetJobsSuccess = (data) => {
  console.log('onGetJobsSuccess: ', data)

  const showJobsHtml = showJobsTemplate({ jobs: data.jobs })
  $('.content').append(showJobsHtml)
}

const onCreateJobSuccess = function (data) {
  $('#job-create-modal-form').trigger('reset')
  $('#job-create-modal').modal('hide')

  refreshHandlebar()
}

const onCreateJobError = function (data) {
  $('#job-create-modal-form').trigger('reset')
  $('#addTaskMsgError').html('Add a NEW task.')
  setTimeout(function () {
    $('#addTaskMsgError').fadeOut(1000)
  }, 1000)
  refreshHandlebar()
}

const onGetJobsFailure = (error) => {
  console.error('onGetJobsFailure: ', error)
  refreshHandlebar()
}

const onGetJobSuccess = function () {
  // console.log('onGetJobSuccess')
  refreshHandlebar()
}
const onGetJobFailure = (error) => {
  console.error('onGetJobFailure: ', error)
  refreshHandlebar()
}
const onDeleteJobSuccess = function () {
  // console.log('onDeleteJobSuccess')
  refreshHandlebar()
}
const onDeleteJobFailure = (error) => {
  console.error('onDeleteJobFailure: ', error)
  refreshHandlebar()
}

const failure = (error) => {
  console.error('failure: ', error)
  refreshHandlebar()
}

const getUserTasksSuccess = function (data) {
  // console.log('getUserTasksSuccess data: ', data)
  refreshHandlebar()
}

const getUserTasksFailure = function (error) {
  console.error('getUserTasksFailure: ', error)
  refreshHandlebar()
}
const onDeleteTaskSuccess = function () {
  refreshHandlebar()
}
const onDeleteTaskFailure = function (error) {
  console.error('onDeleteTaskFailure: ', error)
  refreshHandlebar()
}

const markCompleteSuccess = function (error) {
  console.error('markCompleteFailure: ', error)
  refreshHandlebar()
}

const markCompleteFailure = function (error) {
  console.error('markCompleteFailure: ', error)
  refreshHandlebar()
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
  failure,
  getUserTasksSuccess,
  getUserTasksFailure,
  onDeleteTaskSuccess,
  onDeleteTaskFailure,
  markCompleteSuccess,
  markCompleteFailure
}
