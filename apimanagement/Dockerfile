FROM nginx:1.21.4-alpine
ENV ELK-VERSION=7.16.1

RUN curl -L -O https://artifacts.elastic.co/downloads/beats/elastic-agent/elastic-agent-7.16.1-linux-x86_64.tar.gz 
RUN tar -xvf elastic-agent-7.16.1-linux-x86_64.tar.gz  \
    && rm elastic-agent-7.16.1-linux-x86_64.tar.gz  \
    && chmod 777 -R /elastic-agent-7.16.1-linux-x86_64
#RUN ./elastic-agent-7.16.1-linux-x86_64/elastic-agent install --url=https://47dea6edfeab478fad3e505b97c5dab1.fleet.us-central1.gcp.cloud.es.io:443 --enrollment-token=OFhQUHpYMEJxNGdONHI4VVBPWTA6QjMwNkRLSkRRNVdNbmJuUGM3T0Vvdw==
CMD ["nginx", "-g", "daemon off;"]
# COPY nginx.conf /etc/nginx/nginx.conf
