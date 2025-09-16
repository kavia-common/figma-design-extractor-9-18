#!/bin/bash
cd /home/kavia/workspace/code-generation/figma-design-extractor-9-18/react_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

