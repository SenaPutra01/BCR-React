import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCars, fetchCars } from './counterSlice';
const CarsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30vw;
  text-align: left;
  margin: 1rem;
  padding: 1rem;
  border: 2px solid #a0aec0;
  border-radius: 5px;
`;
const List = styled.ul`
  list-style: none;
`;
const ListItem = styled.li`
  margin: 0.5rem;
`;
const Separator = styled.hr`
  width: 90%;
  margin: -1px;
  background-color: #edf2f7;
  color: #edf2f7;
`;
const Counter = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getAllCars);
  const carsStatus = useSelector((state) => state.cars.status);
  const error = useSelector((state) => state.cars.error);

  useEffect(() => {
    if (carsStatus === 'idle') {
      dispatch(fetchCars());
    }
    console.log("CarsStatus", carsStatus);
  }, [carsStatus, dispatch]);

  let content;
  if (carsStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (carsStatus === 'succeeded') {
    content = (
      <List>
        {cars.map((car) => {
          return (
            <ListItem key={car.id}>
              <h4>
                <Link to={`/edit/${car.id}`}>{car.plate}</Link>
              </h4>
              <p>{car.description.slice(0, 101)}</p>
              <Separator />
            </ListItem>
          );
        })}
      </List>
    );
  } else if (carsStatus === 'failed') {
    content = <div>{error}</div>;
  }
  return <CarsListContainer>{content}</CarsListContainer>;
};
export default Counter;