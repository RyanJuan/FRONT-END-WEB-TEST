import React from 'react';

import IconCalendar from '../asstes/icons/calendar.svg';

export default function ContactSection() {
  return (
    <>
      <h1>Contacts</h1>
      {/* Email */}
      <div className="col-md-6">
        <label htmlFor="address" className="form-label">
          Email Address <sup>*</sup>
        </label>
        <input type="text" className="form-control" id="address" placeholder="Email address" name="email" />
      </div>
      {/* Date */}
      <div className="col-md-2">
        <label htmlFor="country" className="form-label">
          Date of birth <sup>*</sup>
        </label>
        <select className="form-select" id="validationCustom04" name="dateOfBirth">
          <option selected disabled value="">
            DD
          </option>
          <option>...</option>
        </select>
      </div>
      {/* Month */}
      <div className="col-md-2">
        <label htmlFor="address" className="form-label">
          Month <sup>*</sup>
        </label>
        <div>
          <div className="input-group has-validation custome">
            <span className="input-group-text" id="inputGroupPrepend">
              <img src={IconCalendar} alt="ic_calendar" />
            </span>
            <input type="text" className="form-control" placeholder="MM" name="month" />
          </div>
        </div>
      </div>
      {/* Year */}
      <div className="col-md-2">
        <label htmlFor="address" className="form-label">
          Year
        </label>
        <div>
          <div className="input-group has-validation custome">
            <span className="input-group-text" id="inputGroupPrepend">
              <img src={IconCalendar} alt="ic_calendar" />
            </span>
            <input type="text" className="form-control" id="address" placeholder="YYYY" name="year" />
          </div>
        </div>
      </div>
    </>
  );
}
