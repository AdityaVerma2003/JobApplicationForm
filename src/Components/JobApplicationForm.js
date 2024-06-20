
import React, { useState } from 'react';
import { useForm } from "../Hooks/useForm";
import { validate } from '../Hooks/validate';
import "./JobApplicationForm.css"

const JobApplicationForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    relevantExperience: '',
    portfolioURL: '',
    skills: {
      JavaScript: false,
      CSS: false,
      Python: false,
      React: false,
    },
    preferedInterviewTime: '',
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(initialValues, validate);

  const [submit, setSubmit] = useState(false)

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1 className="display-5 my-5 text-center">Job Application Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <div >
              <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="form-control"
                id="exampleInputEmail1"
                value={values.fullName|| ''}
                onChange={handleChange}
              />
              {errors.fullName && <p>{errors.fullName}</p>}
            </div>
            <div >
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={values.email|| ''}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
              <label>Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                className="form-control"
                value={values.phoneNumber|| ''}
                onChange={handleChange}
              />
              {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
            </div>
            <div>
              <select className="form-select" aria-label="Default select example"
                name="position"
                value={values.position|| ''}
                onChange={handleChange}>
                <option value=" ">Applying for Position</option>
                <option value="Developer">Developer</option>
                <option value="Manager">Manager</option>
                <option value="Designer">Designer</option>
              </select>
              {errors.position && <p>{errors.position}</p>}
            </div>

            {['Developer', 'Designer'].includes(values.position) && (
              <div>
                <label>Relevant Experience (in years)</label>
                <input
                  type="text"
                  className="form-control"
                  name="relevantExperience"
                  value={values.relevantExperience|| ''}
                  onChange={handleChange}
                />
                {errors.relevantExperience && <p>{errors.relevantExperience}</p>}
              </div>
            )}

            {values.position === 'Designer' && (
              <div >
                <label htmlFor="urlinput" className="form-label">Portfolio URL</label>
                <input
                  type="text"
                  name="portfolioURL"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={values.portfolioURL|| ''}
                  onChange={handleChange}
                />
                {errors.portfolioURL && <p>{errors.portfolioURL}</p>}
              </div>
            )}

            {values.position === 'Manager' && (
              <div>
                <label>Management Experience </label>
                <input
                  type="text"
                  className="form-control"
                  name="managementExperience"
                  value={values.managementExperience|| ''}
                  onChange={handleChange}
                />
                {errors.managementExperience && <p>{errors.managementExperience}</p>}
              </div>
            )}


            <div className='header-checkbox'>
              <legend>Additional Skills </legend>
              <div className="form-check form-check-flex">
                <input className="form-check-input" 
                type="checkbox"
                  name="skills.Python"
                  id="inlineRadio1"
                  value="Python"
                  checked={values.skills.Python}
                  onChange={handleChange} />
                <label className="form-check-label" htmlFor="inlineRadio1">Python</label>
              </div>
              <div className="form-check form-check-flex">
                <input className="form-check-input" 
                type="checkbox"
                  id="inlineRadio2"
                  value="JavaScript"
                  name="skills.JavaScript"
                  checked={values.skills.JavaScript}
                  onChange={handleChange} />
                <label className="form-check-label" htmlFor="inlineRadio2">JavaScript</label>
              </div>
              <div className="form-check form-check-flex">
                <input className="form-check-input"
                  type="checkbox" 
                  id="inlineRadio3"
                  value="CSS"
                  name="skills.CSS"
                  checked={values.skills.CSS}
                  onChange={handleChange} />
                <label className="form-check-label" htmlFor="inlineRadio3">CSS</label>
              </div>
              <div className="form-check form-check-flex">
                <input className="form-check-input" 
                type="checkbox"
                  name="skills.React"
                  id="inlineRadio3"
                  value="React"
                  checked={values.skills.React}
                  onChange={handleChange} />
                <label className="form-check-label" htmlFor="inlineRadio3">React</label>
              </div>
              {errors.skills && <p>{errors.skills}</p>}
            </div>

            <div>
              <label>Prefered Interview Time </label>
              <input
                type="datetime-local"
                name="preferredInterviewTime"
                className="form-control"
                value={values.preferredInterviewTime|| ''}
                onChange={handleChange}
              />
              {errors.preferredInterviewTime && <p>{errors.preferredInterviewTime}</p>}
            </div>


          </div>

          <button type="submit" value={submit} className="btn btn-primary " onClick={() => { setSubmit(true) }} >Submit</button>

          {submit ? (
            <div className='formsummary'>
              <h3>Form Data:</h3>
              <p>Full Name: {values.fullName}</p>
              <p>Email: {values.email}</p>
              <p>Phone Number: {values.phoneNumber}</p>
              <p>Applying for Position: {values.position}</p>
              {['Developer', 'Designer'].includes(values.position) && (
                <p>Relevant Experience: {values.relevantExperience}</p>
              )}
              {values.position === 'Designer' && (
                <p>Portfolio URL: {values.portfolioURL}</p>
              )}
              {values.position === 'Manager' && (
                <p>Management Experience: {values.managementExperience}</p>
              )}
              <p>Additional Skills: {Object.keys(values.skills).filter(skill => values.skills[skill]).join(', ')}</p>
              <p>Preferred Interview Time: {values.preferredInterviewTime}</p>
            </div>
          ) : ""}
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
