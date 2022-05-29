import React from 'react'

export default function header() {
  return (
    <div>
      <header id="home">
  <nav
    className="navbar navbar-expand-lg fixed-top navbar-dark py-3"
    aria-label="Main navigation"
  >
    <div className="container">
      <a className="navbar-brand" href="/">
        <span>BINAR</span>ENTAL CAR
      </a>
      <button
        className="navbar-toggler p-0 border-0"
        type="button"
        data-bs-toggle="offcanvas"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="navbar-collapse offcanvas-collapse"
        id="navbarsExampleDefault"
      >
        <div className="navbar-nav me-5 ms-auto" id="navbar-spy">
          <a className="nav-link me-4" href="#service">
            Our Services
          </a>
          <a className="nav-link me-4" href="#info">
            Why Us
          </a>
          <a className="nav-link me-4" href="#testimonial">
            Testimonial
          </a>
          <a className="nav-link me-4" href="#faq">
            FAQ
          </a>
        </div>
        <div className="btn-navbar">
          <a href="#" className="btn btn-regis">
            Register
          </a>
        </div>
      </div>
    </div>
  </nav>
</header>

    </div>
  )
}
