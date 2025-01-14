const core = require('@actions/core')
const exec = require('@actions/exec')
const github = require('@actions/github')

function run() {
    core.info('Deploying to S3');
    core.notice('Starting process to deploy to S3');
}



run();