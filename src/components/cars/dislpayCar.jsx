import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
//import 'boxicons'
import { getAllCars, fetchCars } from '../../features/counter/counterSlice';

export default function Body() {
  
  const dispatch = useDispatch();
  const cars = useSelector(getAllCars);
  const carsStatus = useSelector((state) => state.cars.status);
  const error = useSelector((state) => state.cars.error);
  
  const [carsFilter, setCarsFilter] = useState([]);
  const [capacity, setCapacity] = useState();
  const [waktu, setWaktu] = useState();
  const [tanggal, setTanggal] = useState();
  
  useEffect(() => {
    if (carsStatus === 'idle') {
      dispatch(fetchCars());
    }
    if(carsStatus === 'succeeded'){
      setCarsFilter(cars);
    }
    console.log("CarsStatus", carsStatus);
  }, [carsStatus, dispatch]);

  const doFilterCars = ( ) =>{ 
    const filterCarResult =  cars.filter((item) => {
      let dateTime = new Date(tanggal + " " + waktu)
      let date = new Date(item.availableAt);
      let epochTime = dateTime.getTime()
      let newDate = date.getTime()
      
      let availableFilter = item.available === true;
      let dateFilter = newDate < epochTime;
      let capacityFilter = item.capacity >= capacity;
      return dateFilter && availableFilter && capacityFilter;
    })
    setCarsFilter(filterCarResult);
    console.log(filterCarResult);
  }

  let content;
  if (carsStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (carsStatus === 'succeeded') {
    content = (
        <>
        <div className="container px-lg-5 position-relative form-container">
          <div className="card justify-content-between">
            <div className="row gx-2">
              <div className="col-lg">
                <label className="form-label">Tipe Driver</label>
                <select
                  name="form_driver"
                  className="form-select form-item"
                  aria-label="Default select example"
                  id="form_driver"
                >
                  <option value="" disabled selected hidden>
                    Pilih Driver
                  </option>
                  <option value="Dengan supir">Dengan supir</option>
                  <option value="Lepas Kunci">Lepas Kunci</option>
                </select>
              </div>
              <div className="col-lg">
                <label htmlFor="tanggal" className="form-label">Tanggal</label>
                <input
                  type="date"
                  id="tanggal"
                  name="form_date"
                  defaultValue=""
                  className="form-control"
                  placeholder="Pilih Tanggal"
                  onChange={(e) => setTanggal((e.target.value))} required
                />
              </div>
              <div className="col-lg">
                <label className="form-label">Waktu Jemput/Ambil</label>
                <div className="time">
                  <input type="time" id="waktu" className="form-control" placeholder="00:00" onChange={(e) => setWaktu((e.target.value))} required/>
                  <i className="fa-solid fa-clock" />
                </div>
              </div>
              <div className="col-lg">
                <label className="form-label">Jumlah Penumpang (optional)</label>
                <div className="capacity">
                  <input
                    type="number"
                    name="form_capacity"
                    id="capacity"
                    defaultValue=""
                    className="form-control"
                    placeholder="Jumlah Penumpang"
                    onChange={(e) => setCapacity(Number(e.target.value))} required
                  />
                  <i className="fa-solid fa-user-group" />
                </div>
              </div>
              <div className="col-lg-2">
                <button className="btn btn-cari" id="load-btn" onClick={doFilterCars}>
                  Cari Mobil
                </button>
                <button id="clear-btn" hidden disabled>
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className='container'>
        <div id="cars-container" className='row'>
            {carsFilter.map(
              (item) => {
                return(
                  <div key={item.id} className='col-lg-4 col-md-12 col-sm-12'>
                    <div className="card" style={{padding: '20px', width: '300px'}}>
                      <img src={item.image} alt="" className="card-img-top" style={{ height:'200px', objectFit: 'cover' }}/>
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
