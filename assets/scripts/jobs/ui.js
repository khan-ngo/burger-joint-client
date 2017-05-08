'use strict'

const displayJobsTemplate = require('../templates/job.listing.handlebars')
// const displaySingleJobTemplate = require('../templates/single-job.handlebars')
const api = require('./api.js')

const refreshHandlebar = function () {
  $('.content').empty()
  api.getJobs()
    .then(onGetJobsSuccess)
    .catch(onGetJobsFailure)
}

const onCreateJobSuccess = function (data) {
  $('#job-create-modal-form').trigger('reset')
  $('#job-create-modal').modal('hide')
  refreshHandlebar()
}

const onCreateJobFailure = function (data) {
  $('#job-create-modal-form').trigger('reset')
  $('#addTaskMsgError').html('Add a NEW task.')
  setTimeout(function () {
    $('#addTaskMsgError').fadeOut(1000)
  }, 1000)
  refreshHandlebar()
}

const onGetJobsSuccess = (data) => {
  const displayJobsHtml = displayJobsTemplate({ jobs: data.jobs })
  $('.content').append(displayJobsHtml)
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

const onMarkCompleteSuccess = function () {
  refreshHandlebar()
}
const onMarkCompleteFailure = (error) => {
  console.error('onDeleteJobFailure: ', error)
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

module.exports = {
  onCreateJobSuccess,
  onCreateJobFailure,
  onGetJobsSuccess,
  onGetJobsFailure,
  onGetJobSuccess,
  onGetJobFailure,
  onMarkCompleteSuccess,
  onMarkCompleteFailure,
  onDeleteJobSuccess,
  onDeleteJobFailure
}
