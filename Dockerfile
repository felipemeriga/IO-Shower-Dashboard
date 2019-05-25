FROM openjdk:8-jdk-alpine
VOLUME /tmp
ADD target/ixortalk.aws.cognito.jwt.security.filter-0.0.8-SNAPSHOT.jar app.jar

ENTRYPOINT ["java","-jar","app.jar"]

EXPOSE 2222
