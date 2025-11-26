FROM node:24-bookworm

# Install additional OS packages
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    postgresql-client \
    git \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Set up the working directory
WORKDIR /workspace

# Switch to node user
USER node
