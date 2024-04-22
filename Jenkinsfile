pipeline {
    agent any 
   
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/HGSChandeepa/test-node'
                }
            }
        }
        stage('Build Docker Image') {
            steps {  
                bat 'docker build -t adomicarts/appeg20203974-cuban:%BUILD_NUMBER% .'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'samin-docker', variable: 'samindocker')]) {
   
               bat'docker login -u adomicarts -p ${samindocker}'
                }
            }
        }
        stage('Push Image') {
            steps {
                bat 'docker push adomicarts/appeg20203974-cuban:%BUILD_NUMBER%'
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}