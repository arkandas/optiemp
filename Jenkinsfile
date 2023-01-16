pipeline {
  agent any
  environment {
    HOME = '.'
  }
  stages {
    stage("run") {
      steps {
        sh '''
        which docker
        docker ps -aq --filter "name=optiemp" | grep -q . && docker stop optiemp && docker rm -fv optiemp

        docker compose -f ./docker-compose.yaml rm -f -v
        docker compose -f ./docker-compose.yaml up -d --no-deps --build
        '''
      }
    }
  }
}