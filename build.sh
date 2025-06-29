#\!/bin/bash
export NODE_OPTIONS="--openssl-legacy-provider"
yarn build
EOF < /dev/null