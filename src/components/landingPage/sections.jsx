import React from 'react'

export default function sections() {
  return (
    <>
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
  <section className="service section-padding mt-5" id="service">
    <div className="container">
      <div className="row mt-4">
        <div className="col-lg-6 text-center">
          <img
            src="../assets/images/service/img_service.png"
            className="img-fluid"
            width={459}
            alt=""
          />
        </div>
        <div className="col-lg-6 mt-4" data-aos="fade-left">
          <h2 className="heading service-heading">
            Best Car Rental for any kind of trip in (Lokasimu)!
          </h2>
          <p className="mt-4 subheading service-subheading">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <div className="list-service">
            <div className="service-item">
              <img src="../assets/images/service/list-service.png" alt="" />
              <span>Sewa Mobil Dengan Supir di Bali 12 Jam</span>
            </div>
            <div className="service-item">
              <img src="../assets/images/service/list-service.png" alt="" />
              <span>Sewa Mobil Dengan Supir di Bali 12 Jam</span>
            </div>
            <div className="service-item">
              <img src="../assets/images/service/list-service.png" alt="" />
              <span>Sewa Mobil Dengan Supir di Bali 12 Jam</span>
            </div>
            <div className="service-item">
              <img src="../assets/images/service/list-service.png" alt="" />
              <span>Sewa Mobil Dengan Supir di Bali 12 Jam</span>
            </div>
            <div className="service-item">
              <img src="../assets/images/service/list-service.png" alt="" />
              <span>Sewa Mobil Dengan Supir di Bali 12 Jam</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section className="section-padding" id="info">
    <div className="container">
      <div className="title-section text-center" data-aos="fade-up">
        <h2 className="heading">Why Us?</h2>
        <span className="subheading">
          Mengapa Harus Pilih Binar Car Rental?
        </span>
      </div>
      <div className="row mt-4">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card-why">
            <div className="why-icon">
              <img src="../assets/images/why/icon_complete.png" alt="" />
            </div>
            <div className="why-text">
              <h3>Mobil Lengkap</h3>
              <p>
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card-why">
            <div className="why-icon">
              <img src="../assets/images/why/icon_price.png" alt="" />
            </div>
            <div className="why-text">
              <h3>Mobil Lengkap</h3>
              <p>
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card-why">
            <div className="why-icon">
              <img src="../assets/images/why/icon_24hrs.png" alt="" />
            </div>
            <div className="why-text">
              <h3>Mobil Lengkap</h3>
              <p>
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card-why">
            <div className="why-icon">
              <img src="../assets/images/why/icon_professional.png" alt="" />
            </div>
            <div className="why-text">
              <h3>Mobil Lengkap</h3>
              <p>
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* =========================
  TESTIMONIAL SECTION
    ============================== */}
  <section className="section-padding testimonial" id="testimonial">
    <div className="row text-center">
      <div className="col text-center" data-aos="fade-up">
        <h1 className="heading">Testimonial</h1>
        <p className="subheading">
          Berbagi review positif dari para pelanggan kami
        </p>
      </div>
    </div>
    <div className="row mt-4 testimonial">
      <div className="col testimonial-container">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide testimonial-card">
              <div className="row">
                <div className="col-lg-3 col-md-12 mt-5">
                  <img src="../assets/images/testimonial/img_photo.png" alt="" />
                </div>
                <div className="col-lg-8 col-md-12">
                  <div className="testimonial-text">
                    <img src="../assets/images/testimonial/Rate.png" alt="" />
                    <blockquote>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide testimonial-card">
              <div className="row">
                <div className="col-lg-3 mt-5">
                  <img src="../assets/images/testimonial/img_photo.png" alt="" />
                </div>
                <div className="col-lg-8">
                  <div className="testimonial-text">
                    <img src="../assets/images/testimonial/Rate.png" alt="" />
                    <blockquote>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide testimonial-card">
              <div className="row">
                <div className="col-lg-3 mt-5">
                  <img src="../assets/images/testimonial/img_photo.png" alt="" />
                </div>
                <div className="col-lg-8">
                  <div className="testimonial-text">
                    <img src="../assets/images/testimonial/Rate.png" alt="" />
                    <blockquote>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide testimonial-card">
              <div className="row">
                <div className="col-lg-3 mt-5">
                  <img src="../assets/images/testimonial/img_photo.png" alt="" />
                </div>
                <div className="col-lg-8">
                  <div className="testimonial-text">
                    <img src="../assets/images/testimonial/Rate.png" alt="" />
                    <blockquote>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide testimonial-card">
              <div className="row">
                <div className="col-lg-3 mt-5">
                  <img src="../assets/images/testimonial/img_photo.png" alt="" />
                </div>
                <div className="col-lg-8">
                  <div className="testimonial-text">
                    <img src="../assets/images/testimonial/Rate.png" alt="" />
                    <blockquote>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide testimonial-card">
              <div className="row">
                <div className="col-lg-3 mt-5">
                  <img src="../assets/images/testimonial/img_photo.png" alt="" />
                </div>
                <div className="col-lg-8">
                  <div className="testimonial-text">
                    <img src="../assets/images/testimonial/Rate.png" alt="" />
                    <blockquote>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col populer d-lg-flex justify-content-center">
          <div className="toggle-slider d-lg-block d-flex justify-content-center">
            <i className="bx bxs-chevron-left-circle" />
            <i className="bx bxs-chevron-right-circle" />
          </div>
        </div>
      </div>
    </div>
    {/* <div class="container-fluid">
</div> */}
  </section>
  {/* =========================
  BANNER
    ============================== */}
  <section className="banner section-padding px-2">
    <div className="container rounded-3">
      <div className="text-banner text-center">
        <h3 className="heading text-white">
          Sewa Mobil di (Lokasimu) Sekarang
        </h3>
        <p className="label">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="#" className="btn btn-banner1 mt-3">
          Mulai Sewa Mobil
        </a>
      </div>
    </div>
  </section>
  {/* =========================
  FAQ SECTION
    ============================== */}
  <section id="faq" className="section-padding faq">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="title-faq" data-aos="fade-up">
            <h3 className="heading">Frequently Asked Question</h3>
            <span className="subheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </span>
          </div>
        </div>
        <div className="col-md-7">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Apa saja syarat yang dibutuhkan?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facilis adipisci quibusdam officia quas libero, minima
                  suscipit laborum eius optio amet?
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Berapa hari minimal sewa mobil lepas kunci?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facilis adipisci quibusdam officia quas libero, minima
                  suscipit laborum eius optio amet?
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facilis adipisci quibusdam officia quas libero, minima
                  suscipit laborum eius optio amet?
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Apakah Ada biaya antar-jemput?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facilis adipisci quibusdam officia quas libero, minima
                  suscipit laborum eius optio amet?
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  Bagaimana jika terjadi kecelakaan?
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam quasi exercitationem accusantium nobis deserunt autem
                  facilis, similique placeat blanditiis molestiae?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}
