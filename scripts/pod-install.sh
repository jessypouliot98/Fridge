#!/usr/bin/env bash

# Get script current dir
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

# Get relative iOS dir
IOS_DIR="$SCRIPT_DIR/../apps/app/ios"

# Get args
args="";
for arg in "$@"
  do
      args="$args$arg ";
done

echo "Installing pods.."

cd $IOS_DIR

pod install $args

echo "Done."
