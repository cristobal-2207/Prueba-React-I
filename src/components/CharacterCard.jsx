import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CharacterCard = ({characterUrl}) => {

  const [characterData, setCharacterData] = useState({})

  const getCharacter = async () => {
    const response = await fetch(characterUrl)
    const data = await response.json()
    setCharacterData(data)
  }

  useEffect(() => {
    getCharacter()
  }, [])

  return (
    <Card className="card-character" style={{width: '18rem'}}>
      <Card.Img variant="top" src={characterData.image} />
      <Card.Body>
        <Card.Title>{characterData.name}</Card.Title>
        <Button variant="primary">Escoger</Button>
      </Card.Body>
    </Card>
  )
};

export default CharacterCard;