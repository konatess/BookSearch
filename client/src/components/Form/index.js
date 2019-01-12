import React from "react";
import "./style.css"

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        <input
          className="form-control text-white"
          id="Title"
          type="text"
          value={q}
          placeholder="Harry Potter and the Sorcerer's Stone"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-info float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
