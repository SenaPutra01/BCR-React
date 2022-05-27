import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllCars, fetchCars } from '../../features/counter/counterSlice';

export default function Body() {
  // const [penampung, pengubah] = useState()
  const [carsFilter, setCarsFilter] = useState([])
  const [capacity, setCapacity] = useState()
  const [waktu, setWaktu] = useState()
  const [tanggal, setTanggal] = useState()
  const [driver, setDriver] = useState()


  const dispatch = useDispatch();
  const cars = useSelector(getAllCars);
  const carsStatus = useSelector((state) => state.cars.status);
  const error = useSelector((state) => state.cars.error);

  const filterCars = () =>{
    const filteredCar =  cars.filter(item => {
     let datetime = new Date(tanggal + " " + waktu)
     let date = new Date(item.available);
     let newDate = date.getTime()
 
     const beforeEpochTime = datetime.getTime()
     let filterTanggal = newDate > beforeEpochTime;
     let filterCapacity = item.capacity <= capacity;
     let filterDriver = item.driver === driver;
     return filterCapacity && filterTanggal && filterDriver;
    })
    console.log(filteredCar);
    setCarsFilter(filteredCar);
   }

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
        <>
        <div className='container'>
        <div id="cars-container" className='row'>
            {carsFilter.map(
              item => {
                return(
                  <div key={item.id} className='col-lg-4 col-md-12 col-sm-12'>
                    <div className="card" style={{padding: '20px'}}>
                  <img src={item.image} alt="" className="card-img-top" style={{ height:'400px', objectFit: 'cover' }}/>
                    <div className="card-body w-100">
                      <p className="card-title" style={{ fontWeight: '400' }}>{item.model}</p>
                      <p style={{ fontWeight:'700' }}>Rp{item.rentPerDay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} / hari</p>
                      <p>{item.description.slice(0, 38)}</p>
                      <p>{item.capacity} orang</p>
                      <p> {item.transmission}</p>
                      <p> Tahun {item.year}</p>
                      <p>{item.available}</p>
                      <button id="cari" type="button" className="btn btn-success text-light w-100">Pilih Mobil</button>
                    </div>
                  </div>
                  </div>
                )
              }
            )
            }
        </div>
        </div>
        </>
    );
  } else if (carsStatus === 'failed') {
    content = (
      <div>{error}</div>
    )
  }

  return <>{content}</>
}
