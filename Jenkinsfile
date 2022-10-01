pipeline {
  agent any
  environment {
    HOME = '.'
  }
  tools {
   'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'docker'
   nodejs 'node'
  }
  stages {
    stage("dependencies") {
      steps {
        sh '''
        ls -lsa
        docker --version
        node --version
        npm --version
        '''
      }
    }
    stage("clean") {
      steps {
        sh '''
        if [ $(docker ps -a -q --filter ancestor=optiemp --format="{{.ID}}") ]
        then
        echo 'Deleting and removing optiemp containers'
        docker rm $(docker stop $(docker ps -a -q --filter ancestor=optiemp --format="{{.ID}}"))
        docker rmi $(docker images 'optiemp' -a -q)
        fi
        '''
      }
    }
    stage("compile") {
      steps {
        sh '''
        echo 'Compiling Angular App'
        npm install
        npm install @angular/cli
        npm run ng build --prod
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
        sh 'docker run --name optienv -d -p 8010:80 --restart unless-stopped optiemp'
      }
    }
  }
}