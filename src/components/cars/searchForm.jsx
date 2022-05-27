import React from 'react'

export default function searchForm() {
  return (
    <div>
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
          <label className="form-label">Tanggal</label>
          <input
            type="date"
            id="form_date"
            name="form_date"
            defaultValue=""
            className="form-control"
            placeholder="Pilih Tanggal"
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
            />
            <i className="fa-solid fa-user-group" />
          </div>
        </div>
        <div className="col-lg-2">
          <button className="btn btn-cari" id="load-btn">
            Cari Mobil
          </button>
          <button id="clear-btn" hidden disabled>
            Clear
          </button>
        </div>
      </div>
      {/* </form> */}
    </div>
  </div>
    </div>
  )
}
