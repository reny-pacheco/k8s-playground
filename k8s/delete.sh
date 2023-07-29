#!/bin/sh

kubectl delete -f ./server-deployment.yaml
kubectl delete -f ./server-service.yaml
kubectl delete -f ./client-deployment.yaml
kubectl delete -f ./client-service.yaml