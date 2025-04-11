#!/bin/bash
echo "Installing dependencies with npm..."
npm install --legacy-peer-deps

echo "Building Gatsby site..."
npm run build 