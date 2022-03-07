import React from 'react';
import TitleItem from './TitleItem';

export default function CreateNewAccountSection() {
  return (
    <div className="mb-3">
      <h1>Create new account</h1>
      {/* Title */}
      <div>
        <label htmlFor="lastName" className="form-label">
          Title
        </label>
        <div className="d-flex mb-3">
          <TitleItem name="mrs">Mrs</TitleItem>
          <TitleItem name="ms">Ms</TitleItem>
          <TitleItem name="mdm">Mdm</TitleItem>
          <TitleItem name="mr">Mr</TitleItem>
          <TitleItem name="dr">Dr</TitleItem>
        </div>
      </div>
      {/* Name */}
      <div className="row mb-4">
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">
            Last name <sup>*</sup>
          </label>
          <input type="text" className="form-control" id="lastName" placeholder="Last name" name="lastName" />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">
            First name <sup>*</sup>
          </label>
          <input type="text" className="form-control" id="firstName" placeholder="First name" name="firstName" />
          <div className="valid-feedback">Looks good!</div>
        </div>
      </div>
      {/* Phone number */}
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <label className="form-label">
            Mobile phone number <sup>*</sup>
          </label>
          <div className="d-flex align item">
            <div className="col-sm-3 col-md-3">
              <select className="form-select" style={{ width: 80 }} name="flag">
                <option selected disabled value="">
                  ID
                </option>
                <option>CN</option>
                <option>RU</option>
                <option>EN</option>
              </select>
            </div>
            <div className="col-sm-9 col-md-9 me-5">
              <div className="input-group has-validation custome">
                <span className="input-group-text bg-secondary fw-bold text-secondary">+856</span>
                <input type="text" className="form-control" name="phoneNumber" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
