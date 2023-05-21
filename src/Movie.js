import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';



export default function Movie({movie}) {




  return (
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header><img src={movie.poster} /></Accordion.Header>
            <Accordion.Body>
            <h1>{movie.title}</h1>
            <h2>{movie.rating}</h2>
            <h3>{movie.runTime}</h3>
            <Card style={{width: "400px"}}>
              <Card.Body>
                {movie.synopsis}
              </Card.Body>
            </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
  )
}
