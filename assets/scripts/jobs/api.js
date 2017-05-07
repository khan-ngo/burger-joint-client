'use strict'

const store = require('../store')
const config = require('../config')

const createJob = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/jobs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getJob = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/jobs/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getJobs = function () {
  return $.ajax({
    url: config.apiOrigin + '/jobs',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateJob = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/jobs/' + data.job.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/jobs/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteJob = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/jobs/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const markComplete = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/jobs/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'job': {
        'completed': true
      }
    }
  })
}

module.exports = {
  createJob,
  getJob,
  getJobs,
  updateJob,
  deleteJob,
  markComplete,
  destroy
}
