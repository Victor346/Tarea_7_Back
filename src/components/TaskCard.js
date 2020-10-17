import React from 'react'
import { Card } from 'react-bootstrap'

const TaskCard = ({ title, description }) => {

  return(
    <Card className="mt-4">
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
    </Card>
  );

};

export default TaskCard;