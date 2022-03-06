import AWS from 'aws-sdk'
import Config_S3 from './Config_S3'

class Upload_S3 {
  myBucketConfig(bucketName) {
    let myBucket = new AWS.S3({
      params: { Bucket: bucketName },
      region: Config_S3.INFO_UPLOAD_S3.REGION,
      accessKeyId: Config_S3.INFO_UPLOAD_S3.ACCESS_KEY_ID,
      secretAccessKey: Config_S3.INFO_UPLOAD_S3.SECRET_ACCESS_KEY,
    })
    return myBucket
  }

  //upload File
  uploadFiles(bucketName, file, path, now) {
    let names = file.name.split('.')
    const params = {
      ACL: 'public-read',
      Key: path + '/' + names[0] + '-' + now + '.' + names[1],
      ContentType: file.type,
      Body: file,
    }
    const myBucket = this.myBucketConfig(bucketName)
    return myBucket.putObject(params)
  }
}

export default new Upload_S3()
