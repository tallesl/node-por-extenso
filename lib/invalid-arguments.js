function InvalidArguments (message) {
  // name and message
  this.name    = this.constructor.name
  this.message = message

  // V8's stack trace
  Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
}

// inheriting Error
InvalidArguments.prototype = Object.create(Error.prototype)
InvalidArguments.prototype.constructor = InvalidArguments

// here, take it
module.exports = InvalidArguments

