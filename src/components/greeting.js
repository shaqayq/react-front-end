import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../store/greetings';

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.greeting);
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <h1>{greeting}</h1>

  );
}

export default Greeting;
