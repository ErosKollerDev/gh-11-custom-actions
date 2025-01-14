const core = require('@actions/core')
const exec = require('@actions/exec')
const github = require('@actions/github')

function run() {
    core.info('Deploying to S3');
    core.notice('Starting process to deploy to S3');
    // 1) Get inputs
    const bucket = core.getInput('bucket', { required: true });
    const bucketRegion = core.getInput('bucket-region', { required: true });
    const distFolder = core.getInput('dist-folder', { required: true });

    // 2) Upload to S3
    exec.exec(`aws s3 sync ${distFolder} s3://${bucket} --region ${bucketRegion}`);



}



run();