import React from 'react'

export default function hero() {
  return (
    <div>
      <section className="home h-100" id="home">
        <div className="container container-home">
          <div className="row row-home">
            <div className="col-lg-6 col-sm-12 text-hero" data-aos="fade-bottom">
              <h1 className="heading">
                Sewa &amp; Rental Mobil Terbaik di kawasan Jakarta
              </h1>
              <p className="subheading text-white">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                untuk sewa mobil selama 24 jam.
              </p>
              <div className="btn-home mt-3">
                <a
                  href="/cars"
                  className="btn btn-sewa py-2 px-3 px-lg-4 py-lg-3"
                >
                  Mulai Sewa Mobil
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 image-hero">
              <img src="../assets/images/hero/car.png" className="car" />
              <div className="bg-car" />
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}
