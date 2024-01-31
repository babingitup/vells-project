import React from "react";
import Form from 'react-bootstrap/Form';
function Declaration(){
 const headingStyle = {
    textAlign: 'center',
  };
  const containerStyle = {
    maxWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    textAlign: 'center',
    alignItems: "center",
  };
  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px 20px',
    margin:'20px',
    marginLeft:'520px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };


    return(
        <>  
       

    <h5 className="declaration_heading" style={headingStyle}>
      <b>Declaration by the Applicant</b>
    </h5>
    <p>
    I hereby declare that I have read and understand the conditions of eligibility for the Programme Admission. I fulfil the minimum eligibility criteria and have provided necessary information. In this regard in the event of any information being found incorrect or misleading after Admission, my candidature shall be liable for cancellation by the VISTAS-CDOE at any time and I shall not be entitled to claim refund of the 
    any fee paid by me to the VISTAS-CDOE.
    </p>
    <div className="declation_signContainer" style={containerStyle}>
  
  <input type="file" style={{ display: 'none' }} id="fileInput" />
                  <label htmlFor="fileInput" className="btn btn-primary">
                  <h5 className="declation_sign"><b>Signature of the Applicant</b></h5>
                  </label>
    

</div>
<div>
      <h5><b>Checklist (Proof to be Attached)</b></h5>
      <div className="form-check">
        <input disabled type="checkbox" id="checkboxId1" className="form-check-input" />
        <label title="" htmlFor="checkboxId1" className="form-check-label">1. Profile Photo.</label>
      </div>
      <div className="form-check">
        <input disabled type="checkbox" id="checkboxId2" className="form-check-input" />
        <label title="" htmlFor="checkboxId2" className="form-check-label">2. Birth Certificate</label>
      </div>
      <div className="form-check">
        <input disabled type="checkbox" id="checkboxId3" className="form-check-input" />
        <label title="" htmlFor="checkboxId3" className="form-check-label">3. Communal Category.</label>
      </div>
      <div className="form-check">
        <input disabled type="checkbox" id="checkboxId4" className="form-check-input" />
        <label title="" htmlFor="checkboxId4" className="form-check-label">4. Educational Qualification.</label>
      </div>
      <div className="form-check">
        <input disabled type="checkbox" id="checkboxId5" className="form-check-input" />
        <label title="" htmlFor="checkboxId5" className="form-check-label">5. Aadhar Card Copy.</label>
      </div>
      <div className="form-check">
        <input disabled type="checkbox" id="checkboxId6" className="form-check-input" />
        <label title="" htmlFor="checkboxId6" className="form-check-label">6. Person with Disability(PWD).</label>
      </div>
      <div className="form-check">
        <input disabled type="checkbox" id="checkboxId7" className="form-check-input" />
        <label title="" htmlFor="checkboxId7" className="form-check-label">7. Defense Security Personal.</label>
      </div>
      <div className="form-check">
        <input disabled type="checkbox" id="checkboxId8" className="form-check-input" />
        <label title="" htmlFor="checkboxId8" className="form-check-label">8. Signature of Applicant.</label>
      </div>
    </div>
    
    <button style={buttonStyle} >
     successful
    </button>
    </>
  );
        

} export default Declaration;