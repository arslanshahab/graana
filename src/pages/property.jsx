import React from "react";
import { useState } from "react";
import { propertiesList } from "../data";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/Button/Button";

export const Property = () => {
  const [property, setProperty] = useState();
  const params = useParams();
  const navigate = useNavigate();
  // const {id} = useParams() -> destructured value

  useEffect(() => {
    const propertyId = Number(params.id);
    const _property = propertiesList.find((p) => p.id === propertyId);
    setProperty(_property);
  }, [params]);

  const handleClick = () => {
    navigate('/property/3')
  }

  return (
    <div>
      {/* <h1>{property && property.name}</h1> */}
      {/* OPTIONAL CHAINING */}
      <h1>{property?.name}</h1>

      <Button onClick={handleClick} title={'New Property'} />
    </div>
  );
};
