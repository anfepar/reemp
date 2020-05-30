#!/bin/bash

if ! [ -z "$PRODUCTION" ]; then 
    echo "************ Production environment, detaching from terminal ************"
    nohup sh start.sh &
else 
    echo "<<<<<<<<<<<<<< Development server <<<<<<<<<<<<<<"
    sh start.sh
fi

