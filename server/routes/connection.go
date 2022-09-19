package routes

import (
	"context"
	"time"
	"log"
	"fmt"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func DBInstance()  *mongo.Client{

	MongoDB := "mongodb://localhost:27017"

	client, err := mongo.NewClient(options.Client().ApplyURI(MongoDB))

	if err != nil {
		log.Fatal(err)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)

	defer cancel()

	err = client.Connect(ctx)
  if err != nil{
		log.Fatal(err)
	}
  fmt.Println("Connected to Database")
	return client
}

var Client *mongo.Client = DBInstance()


func OpenCollection(client *mongo.Client, collectionName string) *mongo.Collection {
	
	var collection *mongo.Collection = client.Database("caloriesdb").Collection(collectionName)
	return collection
}