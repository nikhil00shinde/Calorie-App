import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import {Card, Row, Col, Button} from "react-bootstrap";

const Entry = ({entryData, setChangeIngredient, setChangeEntry, deleteSingleEntry})=>{
  return (
     <Card>
      <Row>
        <Col>Dish:{entryData !== undefined && entryData.dish}</Col>
        <Col>Ingredients:{entryData !== undefined && entryData.ingredient}</Col>
        <Col>Calories:{entryData !== undefined && entryData.calories}</Col>
        <Col>Fat:{entryData !== undefined && entryData.fat}</Col>
        <Col><Button onClick={()=> deleteSingleEntry(entryData._id)}>delete entry</Button></Col>
        <Col><Button onClick={()=> changeIngredient()}>change ingredients</Button></Col>
        <Col><Button onClick={()=> changeEntry()}>change entry</Button></Col>
      </Row>
     </Card>
  )

  function changeIngredient(){
    setChangeIngredient(
      {
        "change":true,
        "id":entryData._id
      }
    )
  }

  function changeEntry(){
    setChangeEntry(
      {
        "change":true,
        "id":entryData._id
      }
    )
  }
}