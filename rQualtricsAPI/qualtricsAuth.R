###################################################
# This function takes your username and token and #
# saves them to a file so that you do not have to #
# look them up again.                             #
###################################################

qualtricsAuth = function (username, token, file = "qualtricsAuth.RData") {
  save(username, token, file = file)
}