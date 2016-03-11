# Helpful Files for Qualtrics

This is just a collection of various scripts that I use for Qualtrics.

## R Qualtrics API

If you have access to the Qualtrics REST API, then some of these functions might be useful for you.

The goal is to build surveys and download data without having to login to Qualtrics too often; depending on the needs of your survey, you might never need to leave RStudio!
  
  - exportQualtricsData: Downloads your survey data into R
  - getSurveyNamesID: This function brings the survey names and IDs into R
  - importQualtricsSurvey: Makes importing an "advanced format" text file in Qualtrics easy
  - qualtricsAuth: saves a file with your username and token to your project

## JavaScript

There are a variety of little JS scripts that you can apply to your survey.

  - audioPlay: Plays an audio file on RO selection
  - autocomplete: Integrates an autocomplete widget into a text response
  - customNext: Allows you to provide custom navigation button text on any given page
  - responseLock: disables the ROs for a certain amount of time and then progresses on response

You will need to adapt these to best fit your needs.

## CSS Skins

There are a few skins that I like to use for different purposes.

## Regular Expression

There are a handful of very useful regular expressions that you can use for custom flow and validation.

I will be adding to this list over time.