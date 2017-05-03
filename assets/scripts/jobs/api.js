'use strict'

const store = require('../store')
const config = require('../config')

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/jobs',
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

const getUserTasks = function () {
  return $.ajax({
    url: config.apiOrigin + '/jobs',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    dataType: 'json'
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/jobs/' + data.job.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

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

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/jobs/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
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

module.exports = {
  createJob,
  index,
  getJobs,
  show,
  destroy,
  update,
  getUserTasks
}
