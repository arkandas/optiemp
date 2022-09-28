pipeline {
  agent { label "linux" }
  stages {
  stage("clean") {
        steps {
          sh '''
            docker rm $(docker stop $(docker ps -a -q --filter ancestor=optiemp --format="{{.ID}}"))
            docker rmi $(docker images 'optiemp' -a -q)
            '''
          }
      }
    stage("compile") {
      steps {
        sh '''
          npm install
          ng build --prod
          '''
        }
    }
    stage("build") {
      steps {
        sh 'docker build -t optiemp .'
      }
    }
    stage("run") {
      steps {
        sh 'docker run --rm optiemp'
      }
    }
  }
}
