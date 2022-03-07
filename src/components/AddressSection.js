import React from 'react';

export default function AddressSection() {
  return (
    <div className="mb-3">
      <h1>Address</h1>
      {/* Address */}
      <div className="col-md mb-4">
        <label htmlFor="address" className="form-label">
          Address <sup>*</sup>
        </label>
        <input type="text" className="form-control" id="address" placeholder="Address" name="address" />
      </div>
      <div className="row">
        {/* Counry */}
        <div className="col-md-6 mb-4">
          <label htmlFor="country" className="form-label">
            Country/Location <sup>*</sup>
          </label>
          <select className="form-select" name="country">
            <option selected disabled value="">
              Select Country/Location
            </option>
            <option>...</option>
          </select>
        </div>
        {/* District */}
        <div className="col-md-6 mb-4">
          <label htmlFor="address" className="form-label">
            Provice/District <sup>*</sup>
          </label>
          <input type="text" className="form-control" id="address" placeholder="Provice/District" name="address" />
        </div>
      </div>
    </div>
  );
}
