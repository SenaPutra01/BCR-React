import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllCars, fetchCars } from '../../features/counter/counterSlice';

export default function Body() {
  const [carsFilter, setCarsFilter] = useState([])
  const [capacity, setCapacity] = useState()
  const [waktu, setWaktu] = useState()
  const [tanggal, setTanggal] = useState()

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
      return filterCapacity && filterTanggal;
    })
    setCarsFilter(filteredCar);
    console.log(filteredCar)
  };
  
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
                  <option value="" disabled="" selected="" hidden="">
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
                  id="form_date"
                  name="form_date"
                  defaultValue=""
                  className="form-control"
                  placeholder="Pilih Tanggal"
                  onChange={(e) => setTanggal((e.target.value))}
                />
              </div>
              <div className="col-lg">
                <label className="form-label">Waktu Jemput/Ambil</label>
                <div className="time">
                  <select
                    name="form_time"
                    className="form-select time-form"
                    aria-label="Default select example"
                    id="form_time"
                    onChange={(e) => setWaktu((e.target.value))}
                  >
                    <option value="" disabled="" selected="" hidden="">
                      Pilih Waktu
                    </option>
                    <option value="08:00">08.00     WIB</option>
                    <option value="09:00">09.00     WIB</option>
                    <option value="10:00">10.00     WIB</option>
                    <option value="11:00">11.00     WIB</option>
                    <option value="12:00">12.00     WIB</option>
                  </select>
                  <i className="fa-solid fa-clock" />
                </div>
              </div>
              <div className="col-lg">
                <label className="form-label">Jumlah Penumpang (optional)</label>
                <div className="capacity">
                  <input
                    type="number"
                    name="form_capacity"
                    id="form_capacity"
                    defaultValue=""
                    className="form-control"
                    placeholder="Jumlah Penumpang"
                    onChange={(e) => setCapacity(Number(e.target.value))}
                  />
                  <i className="fa-solid fa-user-group" />
                </div>
              </div>
              <div className="col-lg-2">
                <button className="btn btn-cari" id="load-btn" onClick={filterCars}>
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
            {cars.map(
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
