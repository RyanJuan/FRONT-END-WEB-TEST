import './App.css';

import CreateNewAccountSection from './components/AccountSection';
import AddressSection from './components/AddressSection';
import ContactSection from './components/ContactSection';

import Logo from './asstes/logo.png';
import IconGear from './asstes/icons/gear.svg';

function App() {
  return (
    <div className="body">
      <header className="header border-warning">
        <div className="mx-0 row">
          <div className="col-12 col-lg-10 d-flex flex-column justify-content-center align-items-center brand py-4">
            <img src={Logo} alt="logo" width={180} style={{ marginLeft: 250 }} />
          </div>
          <div className="col-12 col-lg-2 d-flex align-items-center justify-content-center language-setting">
            <span className="me-2" htmlFor="language">
              Language:
            </span>
            <div className="dropdown me-3">
              <a
                className="dropdown-toggle text-decoration-none text-black"
                id="dropdownMenuOffset"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-offset="10,20"
                href="/"
              >
                English
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                <li>
                  <a className="dropdown-item" href="/english">
                    English
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/bahasa">
                    Bahasa
                  </a>
                </li>
              </ul>
            </div>
            <img src={IconGear} alt="ic_gear" />
          </div>
        </div>
      </header>
      <div className="bg-warning text-center py-2 fw-bold mb-5 mt-1">
        <span>You don't have an accout yet,please create a new account</span>{' '}
      </div>

      <section className="container mb-5">
        <form className="row g-3 needs-validation mx-0" novalidate>
          <CreateNewAccountSection />
          <AddressSection />
          <ContactSection />
          <div className="standard-privacy-note mt-5">
            <h1> Standard Privacy Note</h1>
            <p>
              I warrant that the above information is true and correct. I understand that failure to answer all
              questions listed in this application form may prevent L'OCCITANE from processing my application and
              L'OCCITANE may refuse to accept this application in the right of my individual circumstance
            </p>
            <p>
              I understand that the information collected will be used and retained by L'OCCITANE for the purpose of (i)
              my application of membership program of L'OCCITANE (ii) providing member-exclusive services, and (iii) the
              daily management operation and maintenance of membership account at L'OCCITANE.
            </p>
            <p>
              I understand that it is necessary for me to provide L'OCCITANE with data in connection with the privilege.
              Failure to provide such data may result in L'OCCITANE stores or official website.
            </p>
            <p>
              L'OCCITANE reserves the right to change any of the terms and conditions without prior notice. Changes will
              be posted on signage placed at L'OCCITANE stores or official website. I understand that L'OCCITANE may use
              my personal information for the purpose of providing or promoting services/products made available by
              L'OCCITANE. To choose whether to receive any promotional information sent by L'OCCITANE, please tick the
              box below.
            </p>
            <p>I want to receive information or communication from L'OCCITANE</p>
            <div className="col">
              <div className="d-flex justify-content-between mb-2" style={{ width: 200 }}>
                <label label className="form-check-label me-3" htmlFor="smsAndCal">
                  SMS & Mobile Call
                </label>
                <div className="form-check form-switch d-flex">
                  <input className="form-check-input" type="checkbox" role="switch" id="smsAndCal" />
                </div>
              </div>
              <div className="d-flex justify-content-between mb-2" style={{ width: 200 }}>
                <label label className="form-check-label me-3" htmlFor="emailing">
                  Emailing
                </label>
                <div className="form-check form-switch d-flex">
                  <input className="form-check-input" type="checkbox" role="switch" id="emailing" />
                </div>
              </div>
              <div className="d-flex justify-content-between mb-2" style={{ width: 200 }}>
                <label label className="form-check-label me-3" htmlFor="mailing">
                  Mailing
                </label>
                <div className="form-check form-switch d-flex">
                  <input className="form-check-input" type="checkbox" role="switch" id="mailing" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default App;
