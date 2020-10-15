FROM linuxserver/code-server:version-v3.5.0 
RUN \
    apt-get update &&\
    apt-get install -y go &&\
    rm -rf /var/lib/apt/lists/*
