import React from 'react';

export default function TitleItem({ children, name }) {
  return (
    <div class="form-check form-check-inline">
      <input
        class="form-check-input rounded-0 border-warning"
        type="radio"
        name="inlineRadioOptions"
        id={name}
        value="option1"
      />
      <label class="form-check-label" htmlFor={name}>
        {children}
      </label>
    </div>
  );
}
