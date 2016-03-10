# To use this function, follow this format:
#
# importQualtricsSurvey("username", "token", "XML", "surveyName", "TXT", "fileLocation")
#
# Replace "username", "token", "surveyName", and "fileLocation" with your own values.
#
# Do keep them in quotes!


importQualtricsSurvey = function (username, token, format, surveyName, inputFormat, fileLocation) {

  require(httr)

  url = paste("https://survey.qualtrics.com//WRAPI/ControlPanel/api.php?Version=2.5&Request=importSurvey",
              "&User=", username,
              "&Token=", token,
              "&Format=", format,
              "&Name=", surveyName,
              "&ImportFormat=", inputFormat,
              sep = "")

  url = gsub("[@]","%40",url)

  url = gsub("[#]", "%23", url)

  POST(url, encode = "multipart", body = upload_file(paste(fileLocation)))

  close(fileLocation)
}