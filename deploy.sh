#!/bin/bash

# Install Netlify CLI if not already installed
if ! [ -x "$(command -v netlify)" ]; then
  npm install -g netlify-cli
fi

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist

