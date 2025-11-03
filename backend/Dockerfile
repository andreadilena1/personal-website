# 1) Fase di build: uso Maven per compilare il progetto
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app

# copia pom e sorgenti
COPY pom.xml .
COPY src ./src

# compila
RUN mvn clean package -DskipTests

# 2) Fase di runtime: immagine più leggera con solo Java
FROM eclipse-temurin:17-jre
WORKDIR /app

# copia il jar generato dalla fase di build
COPY --from=build /app/target/*.jar app.jar

# esponi la porta su cui gira Spring (di default 8080)
EXPOSE 8080

# comando di avvio
ENTRYPOINT ["java", "-jar", "app.jar"]
