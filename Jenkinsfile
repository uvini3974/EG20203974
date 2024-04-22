pipeline {
    agent any 
   
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/uvini3974/EG20203974'
                }
            }
        }
        stage('Build Docker Image') {
            steps {  
                bat 'docker build -t uviniisanka/appeg20203974-cuban:%BUILD_NUMBER% .'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'docker-test3974', variable: 'dockertest')]) {
                 bat'docker login -u uviniisanka -p ${dockertest}'
                   }
            }
        }
        stage('Push Image') {
            steps {
                bat 'docker push uviniisanka/appeg20203974-cuban:%BUILD_NUMBER%'
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}