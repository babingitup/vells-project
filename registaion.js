import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import AvatarEditor from 'react-avatar-editor';

const YourComponent = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result);
          setError('');
        };
        reader.readAsDataURL(file);
      } else {
        setImage(null);
        setError('Please choose a valid image file.');
      }
    }
  };
  const [amount, setamount] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("please enter amount");
    } else {
      const options = {
        key: "rzp_test_ffSb2yIkIflJH9",
        // other options...
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ background: '#0dbd72eb', color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem', padding: '10px', margin: '0' }}>
        Application Form for Admission
      </h2>
      <div className="Container">
         <div className="table-responsive"><Table striped bordered responsive style={{ marginTop: '15px' }}>
        <tbody>
          <tr>
            <td rowSpan={2}>1</td>
            <td rowSpan={2}>Name of the Applicant with Initial</td>
            <td>English</td>
            <td colSpan={4}>
              <input type="text" className="form-control" />
            </td>
            <td colSpan={2} rowSpan={5} style={{ textAlign: 'center', paddingTop: '20px' }}>
              <label htmlFor="fileInput" style={{ display: 'block', marginBottom: '10px' }}>
                Choose a file:
                <div>
                  <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} id="fileInput" />
                  <label htmlFor="fileInput" className="btn btn-primary">
                    Select Image
                  </label>
                  {error && <div style={{ color: 'red', marginTop: '5px', fontSize: '0.8rem' }}>{error}</div>}
                  {image && (
                    <div>
                      <AvatarEditor image={image} width={100} height={100} border={10} color={[255, 255, 255, 0.6]} />
                    </div>
                    
                  )}
                </div>
              </label>
            </td>
          </tr>
          <tr>
            <td class=" "style={{ backgroundColor: '#F2F2F2' }}>Tamil</td>
          
            <td colSpan={4}style={{ backgroundColor: '#F2F2F2' }}></td>
          </tr>
          <tr>
          <td rowSpan={2}>2</td>
            <td rowSpan={2}>Name of the Father with Initial</td>
            <td>English</td>
            <td colSpan={4}>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '4px', 
                  boxSizing: 'border-box', 
                }}
              />
            </td>
       
          </tr>
          <tr style={{ backgroundColor: '#F2F2F2' }}>
          <td class=" "style={{ backgroundColor: '#F2F2F2' }}>Tamil</td>
          <td colSpan={4}style={{ backgroundColor: '#F2F2F2' }}></td>
             
            
          </tr>
          
          <td rowSpan={2}style={{ backgroundColor: '#F2F2F2' }}>3</td>
            <td rowSpan={2} style={{ backgroundColor: '#F2F2F2' }}>Name of the Mother</td>
            <td style={{ backgroundColor: '#F2F2F2' }}>English</td>
            <td colSpan={4}style={{ backgroundColor: '#F2F2F2' }}>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '4px', 
                  boxSizing: 'border-box', 
                  
                }}
              />
            
            </td>
            <tr>
      
    </tr>
    <td className="field_no"style={{ backgroundColor: '#F2F2F2' }}>4.</td>
      <td className="field_name"style={{ backgroundColor: '#F2F2F2' }}>Date of Birth(Proof to be Attached)</td>
      <td className="dob" colSpan={5} style={{ backgroundColor: '#F2F2F2', verticalAlign: 'middle' }}>
        <input type="date" style={{ height: '40px', width: '80%', textAlign: 'center' }} />
      </td>
      <td colSpan={2} style={{ verticalAlign: 'middle', textAlign: 'left' , backgroundColor: '#F2F2F2' }}>
        <input name="dob" className="upload_field" type="file" />
      </td>
      <tr>
      <td className="field_no"style={{ backgroundColor: '#F2F2F2' }}>5.</td>
      <td className="field_name"style={{ backgroundColor: '#F2F2F2' }}>Name of the Programme</td>
      <td className="field_value" colSpan={6} style={{ verticalAlign: 'middle', textAlign: 'left' , backgroundColor: '#F2F2F2' }}>
        <select className="drop" style={{ height: '40px', width: '50%', textAlign: 'center' }}  >
          <option value=""></option>
          <option value="bcom">B.Com</option>
          <option value="bba">BBA</option>
          <option value="economics">BA(Hons)-Economics</option>
          <option value="english">BA(Hons)-English</option>
          <option value="mba">MBA</option>
        </select>
      </td>
    </tr>
    <tr>
      <td className="field_no">6.</td>
      <td className="field_name">Medium</td>
      <td className="field_value" colSpan={6} style={{ paddingTop: '10px', textAlign: 'left' }}>
        <select style={{ height: '40px', width: '50%', textAlign: 'center' }}>
          <option value=""></option>
          <option value="english">English</option>
          <option value="tamil">Tamil</option>
        </select>
      </td>
    </tr>
    <tr>
      <td className="field_no"style={{ backgroundColor: '#F2F2F2' }}>7.</td>
      <td className="field_name"style={{ backgroundColor: '#F2F2F2' }}>Language for Foundation Course (Part-I Language-Please tick)</td>
      <td className="field_value" colSpan={6} style={{ verticalAlign: 'middle', textAlign: 'left', backgroundColor: '#F2F2F2' }}>
        <select style={{ height: '40px', width: '40%', textAlign: 'center' }}>
          <option value=""></option>
          <option value="tamil">Tamil</option>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </td>
    </tr>
    <tr>
      <td className="field_no">8.</td>
      <td className="field_name">Gender</td>
      <td colSpan={2}>
        <div className="form-check">
          <input name="gender" type="radio" className="form-check-input" />
          <label title="" className="form-check-label">
            Male
          </label>
        </div>
      </td>
      <td colSpan={2}>
        <div className="form-check">
          <input name="gender" type="radio" className="form-check-input" />
          <label title="" className="form-check-label">
            Female
          </label>
        </div>
      </td>
      <td colSpan={2}>
        <div className="form-check">
          <input name="gender" type="radio" className="form-check-input" />
          <label title="" className="form-check-label">
            Transgender
          </label>
        </div>
      </td>
    </tr>
    <tr>
      <td className="field_no"style={{ backgroundColor: '#F2F2F2' }}>9.</td>
      <td className="field_name"style={{ backgroundColor: '#F2F2F2' }}>Nationality</td>
      <td colSpan={2} className=""style={{ backgroundColor: '#F2F2F2' }}>
        <div className="form-check">
          <input name="nation" type="radio" className="form-check-input" />
          <label title="" className="form-check-label">
            Indian
          </label>
        </div>
      </td>
      <td colSpan={4}style={{ backgroundColor: '#F2F2F2' }}>
        <div className="form-check">
          <input name="nation" type="radio" className="form-check-input" />
          <label title="" className="form-check-label">
            Others
          </label>
        </div>
      </td>
    </tr>
    <tr>
      <td className="field_no">10.</td>
      <td className="field_name">Religion</td>
      <td colSpan={1} className="">
        <div className="form-check">
          <input name="religion" type="radio" className="form-check-input" />
          <label title="" className="form-check-label">
            Hindu
          </label>
        </div>
      </td>
      <td colSpan={1}>
        <div className="form-check">
          <input name="religion" type="radio" className="form-check-input" />
          <label title="" className="form-check-label">
            Muslim
          </label>
        </div>
      </td>
      <td colSpan={1}>
        <div className="form-check">
          <input name="religion" type="radio" className="form-check-input" />
          <label title="" className="form-check-label">
            Christian
          </label>
        </div>
      </td>
      <td colSpan={4}>
        <div className="form-check">
          <input name="religion" type="radio" className="form-check-input" />
          <label title="" className="form-check-label">
            Others
          </label>
        </div>
      </td>
    </tr>
    <tr>
      <td className="field_no"style={{ backgroundColor: '#F2F2F2' }}>11.</td>
      <td className="field_name"style={{ backgroundColor: '#F2F2F2' }}>Communal Category (Proof to be Attached)</td>
      <td className="pwd_select" colSpan={4} style={{ verticalAlign: 'middle', textAlign: 'left' , backgroundColor: '#F2F2F2' }}>
        <select style={{ height: '40px', width: '100%', textAlign: 'center' }}>
          <option value=""></option>
          <option value="GENERAL">GENERAL</option>
          <option value="BC">BC</option>
          <option value="MBC">MBC</option>
          <option value="DNT">DNT</option>
          <option value="SC">SC</option>
          <option value="SC(A)">SC(A)</option>
          <option value="BC(M)">BC(M)</option>
          <option value="ST">ST</option>
        </select>
      </td>
      <td colSpan={3} style={{ verticalAlign: 'middle', textAlign: 'left' , backgroundColor: '#F2F2F2' }}>
        <input name="communal" className="upload_field" type="file" style={{ verticalAlign: 'middle', paddingLeft: '10px' }} />
      </td>
    </tr>
    <tr>
      <td className="field_no">12.</td>
      <td className="field_name">Whether Person with Disability (PWD) (Proof to be Attached)</td>
      <td className="pwd_select" colSpan={4} style={{ verticalAlign: 'middle', textAlign: 'left' }}>
        <select style={{ height: '40px', width: '60%', textAlign: 'center' }}>
          <option value=""></option>
          <option value="DumbLowVision">Dumb Low Vision</option>
          <option value="HearingImpairment">Hearing Impairment</option>
          <option value="LocoMotorImpairment">Loco Motor Impairment</option>
          <option value="VisualImpairment">Visual Impairment</option>
          <option value="no">No</option>
        </select>
      </td>
      <td colSpan={3} style={{ verticalAlign: 'middle', textAlign: 'left' }}>
        <input name="pwd" className="upload_field" type="file" style={{ verticalAlign: 'middle', paddingLeft: '10px' }} />
      </td>
    </tr>
    <tr>
      <td className="field_no"style={{ backgroundColor: '#F2F2F2' }}>13.</td>
      <td className="field_name"style={{ backgroundColor: '#F2F2F2' }}>Employment Status</td>
      <td colSpan={2} className=""style={{ backgroundColor: '#F2F2F2' }}>
        <div className="form-check">
          <input name="employment" type="radio" className="form-check-input" value="Employed" />
          <label title="" className="form-check-label">
            Employed
          </label>
        </div>
      </td>
      <td colSpan={2}style={{ backgroundColor: '#F2F2F2' }}>
        <div className="form-check">
          <input name="employment" type="radio" className="form-check-input" value="SelfEmployed" />
          <label title="" className="form-check-label">
            Self Employed
          </label>
        </div>
      </td>
      <td colSpan={2}style={{ backgroundColor: '#F2F2F2' }}>
        <div className="form-check">
          <input name="employment" type="radio" className="form-check-input" value="Unemployed" />
          <label title="" className="form-check-label">
            Unemployed
          </label>
        </div>
      </td>
    </tr>
    
    <tr>
      <td className="field_no">14.</td>
      <td className="field_name">If Employed in (specify)</td>
      <td colSpan={2} className="">
        <div className="form-check">
          <input name="employ_specific" type="radio" className="form-check-input" />
          <label title="" className="form-check-label">
            Government
          </label>
        </div>
      </td>
      <td colSpan={2}>
        <div className="form-check">
          <input name="employ_specific" type="radio" className="form-check-input" />
          <label title="" className="form-check-label">
            Govt. Aided
          </label>
        </div>
      </td>
      <td colSpan={1}>
        <div className="form-check">
          <input name="employ_specific" type="radio" className="form-check-input" />
          <label title="" className="form-check-label">
            Private
          </label>
        </div>
      </td>
      <td colSpan={1}>
        <div className="form-check">
          <input name="employ_specific" type="radio" className="form-check-input" />
          <label title="" className="form-check-label">
            Not Applicable
          </label>
        </div>
      </td>
    </tr>
    <tr>
      <td className="field_no"style={{ backgroundColor: '#F2F2F2' }}>15.</td>
      <td className="field_name"style={{ backgroundColor: '#F2F2F2' }}>Work Experience Years</td>
      <td colSpan={6}style={{ backgroundColor: '#F2F2F2' }}>
        <input type="text" style={{ width: '40%' }} />
      </td>
    </tr>
    <tr>
      <td className="field_no">16.</td>
      <td className="field_name">Annual Income</td>
      <td className="annual p-0" colSpan={8}>
        <div className="d-flex justify-content-between border-right pr-3">
          <div className="income-input flex-fill">
            <div className="form-check">
              <input name="income" type="radio" className="form-check-input" />
              <label title="" className="form-check-label">
                ₹ 50,000
              </label>
            </div>
          </div>
          <div className="income-input flex-fill">
            <div className="form-check">
              <input name="income" type="radio" className="form-check-input" />
              <label title="" className="form-check-label">
                ₹ 50,001 - ₹ 1,00,000
              </label>
            </div>
          </div>
          <div className="income-input flex-fill">
            <div className="form-check">
              <input name="income" type="radio" className="form-check-input" />
              <label title="" className="form-check-label">
                ₹ 1,00,001 - ₹ 1,50,000
              </label>
            </div>
          </div>
          <div className="income-input flex-fill">
            <div className="form-check">
              <input name="income" type="radio" className="form-check-input" />
              <label title="" className="form-check-label">
                ₹ 1,50,001 - ₹ 2,00,000
              </label>
            </div>
          </div>
          <div className="income-input border-0 flex-fill">
            <div className="form-check">
              <input name="income" type="radio" className="form-check-input" />
              <label title="" className="form-check-label">
                Above ₹ 2,00,000
              </label>
            </div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td className="field_no"style={{ backgroundColor: '#F2F2F2' }}>17.</td>
      <td className="field_name"style={{ backgroundColor: '#F2F2F2' }}>Email</td>
      <td colSpan={6}style={{ backgroundColor: '#F2F2F2' }}>
        <input type="text" style={{ width: '50%' }} />
      </td>
    </tr>
    <tr>
      <td className="field_no">18.</td>
      <td className="field_name">Contact Mobile No</td>
      <td colSpan={4} className="" style={{ verticalAlign: 'middle' }}>
        <input type="text" maxLength="10" name="mobileNo" style={{ width: '50%' }} />
      </td>
      <td colSpan={1} className="field_name" style={{ textAlign: 'center' }}>
        Alternate Mobile No
      </td>
      <td colSpan={2} className="" style={{ verticalAlign: 'middle' }}>
        <input type="text" maxLength="10" name="mobileNo" style={{ width: '50%' }} />
      </td>
    </tr>
    <tr>
      <td className="field_no"style={{ backgroundColor: '#F2F2F2' }}>19.</td>
      <td className="field_name"style={{ backgroundColor: '#F2F2F2' }}>Academic Bank of Credit (ABC) ID No.</td>
      <td colSpan={6} style={{ verticalAlign: 'middle',backgroundColor: '#F2F2F2' }}>
        <input type="text" maxLength="12" name="abcId" style={{ width: '50%' }} />
      </td>
    </tr>
    <tr>
      <td className="field_no">20.</td>
      <td className="field_name">Are you Economically Weaker Section of the Society?</td>
      <td colSpan={6}>
        <div className="checkbox_style" style={{ verticalAlign: 'middle' }}>
          <div className="check_box form-check">
            <input name="economiclly_weak" type="radio" className="form-check-input" />
            <label title="" className="form-check-label">Yes</label>
          </div>
          <div className="check_box form-check">
            <input name="economiclly_weak" type="radio" className="form-check-input" />
            <label title="" className="form-check-label">No</label>
          </div>
        </div>
      </td>
    </tr>
    <tr>
  <td class="field_no" rowspan="5"style={{ backgroundColor: '#F2F2F2' }}>21.</td>
  <td class="field_name" rowspan="5"style={{ backgroundColor: '#F2F2F2' }}>Address for Communication</td>
</tr>
<tr>
      <td colSpan={6}>
        <input type="text" />
      </td>
    </tr>
    <tr>
      <td colSpan={6}style={{ backgroundColor: '#F2F2F2' }}>
        <input type="text" />
      </td>
    </tr>
    <tr>
      <td colSpan={6}>
        <input type="text" />
      </td>
    </tr>
    <tr>
      <td colSpan={6}style={{ backgroundColor: '#F2F2F2' }}>
        <input type="text" />
      </td>
    </tr>
    <tr>
      <td className="field_no">22.</td>
      <td className="field_name">Aadhar Card Number (Attach Proof)</td>
      <td colSpan={3} style={{ verticalAlign: 'middle' }}>
        <input type="text" maxLength="12" name="aadhaar" style={{ width: '50%', height: '35px' }} />
      </td>
      <td colSpan={3} style={{ verticalAlign: 'middle' }}>
        <input name="aadhaar" className="upload_field" type="file" />
      </td>
    </tr>
    <tr>
      <td className="field_no"style={{ backgroundColor: '#F2F2F2' }}>23.</td>
      <td className="field_name"style={{ backgroundColor: '#F2F2F2' }}>Marital Status</td>
      <td colSpan={6}style={{ backgroundColor: '#F2F2F2' }}>
        <div className="checkbox_style">
          <div className="check_box form-check">
            <input name="maritalstatus" type="radio" className="form-check-input" />
            <label title="" className="form-check-label">Married</label>
          </div>
          <div className="check_box form-check">
            <input name="maritalstatus" type="radio" className="form-check-input" />
            <label title="" className="form-check-label">Unmarried</label>
          </div>
          <div className="check_box form-check">
            <input name="maritalstatus" type="radio" className="form-check-input" />
            <label title="" className="form-check-label">Divorced</label>
          </div>
          <div className="check_box form-check">
            <input name="maritalstatus" type="radio" className="form-check-input" />
            <label title="" className="form-check-label">Widow</label>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td className="field_no">24.</td>
      <td className="field_name">Blood Group</td>
      <td className="field_value" colSpan={6} style={{ verticalAlign: 'middle', textAlign: 'left' }}>
        <select style={{ height: '40px', width: '50%', textAlign: 'center' }}>
          <option value=""></option>
          <option value="o_positive">O+ve</option>
          <option value="o_negative">O-ve</option>
          <option value="a_positive">A+ve</option>
          <option value="a_negative">A-ve</option>
          <option value="b_positive">B+ve</option>
          <option value="b_negative">B-ve</option>
          <option value="ab_positive">AB+ve</option>
          <option value="ab_negative">AB-ve</option>
        </select>
      </td>
    </tr>
    <tr>
      <td className="field_no"style={{ backgroundColor: '#F2F2F2' }}>25.</td>
      <td className="field_name"style={{ backgroundColor: '#F2F2F2' }}>Father/Spouse Employment Status</td>
      <td colSpan={6}style={{ backgroundColor: '#F2F2F2' }}>
        <div className="checkbox_style">
          <div className="check_box form-check">
            <input name="Femployment" type="radio" className="form-check-input" />
            <label title="" className="form-check-label">Employed</label>
          </div>
          <div className="check_box form-check">
            <input name="Femployment" type="radio" className="form-check-input" />
            <label title="" className="form-check-label">Un-employed</label>
          </div>
          <div className="check_box form-check">
            <input name="Femployment" type="radio" className="form-check-input" />
            <label title="" className="form-check-label">Self-employed</label>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td className="field_no">26.</td>
      <td className="field_name">Father/Spouse Contact Mobile No.</td>
      <td colSpan={6} style={{ verticalAlign: 'middle' }}>
        <input type="text" maxLength="10" name="mobileNo" style={{ width: '50%' }} />
      </td>
    </tr>
    <tr>
      <td className="field_no"style={{ backgroundColor: '#F2F2F2' }}>27.</td>
      <td className="field_name"style={{ backgroundColor: '#F2F2F2' }}>Father/Spouse E-mail</td>
      <td colSpan={6}style={{ backgroundColor: '#F2F2F2' }}>
        <input type="text" style={{ width: '50%' }} />
      </td>
    </tr>
    <tr>
      <td className="field_no">28.</td>
      <td className="field_name">Whether Defence Security Personal (Proof to be Attached).</td>
      <td className="defence_security" colSpan={3} style={{ textAlign: 'left', verticalAlign: 'middle' }}>
        <select style={{ height: '40px', width: '60%', textAlign: 'center' }}>
          <option value=""></option>
          <option value="EX_SERVICEMEN">Ex-Servicemen</option>
          <option value="WIDOW">Widow</option>
          <option value="DEFENCE">Defence</option>
          <option value="SECURITY_PERSONAL">Security Personal</option>
          <option value="No">No</option>
        </select>
      </td>
      <td colSpan={3} style={{ verticalAlign: 'middle' }}>
        <input name="defense" className="upload_field" type="file" />
      </td>
    </tr>
    <tr>
      <td className="field_no"style={{ backgroundColor: '#F2F2F2' }}>29.</td>
      <td className="field_name"style={{ backgroundColor: '#F2F2F2' }}>Residential Area</td>
      <td colSpan={6}style={{ backgroundColor: '#F2F2F2' }}>
        <div className="checkbox_style">
          <div className="check_box form-check">
            <input name="residence" type="radio" className="form-check-input" />
            <label title="" className="form-check-label">Rural</label>
          </div>
          <div className="check_box form-check">
            <input name="residence" type="radio" className="form-check-input" />
            <label title="" className="form-check-label">Urban</label>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td className="field_no" rowspan={4}>30.</td>
      <td className="field_name" rowspan={4}>Examination Passed (Attach Proof)</td>
      <td colSpan={3}>Name of the Board / University</td>
      <td colSpan={1}>Year of Passing</td>
      <td colSpan={1} style={{ textAlign: 'center' }}>Percentage</td>
      <td colSpan={1}></td>
    </tr>
    <tr>
      <td colSpan={3}style={{ backgroundColor: '#F2F2F2' }}>
        <input type="text" />
      </td>
      <td colSpan={1}style={{ backgroundColor: '#F2F2F2' }}>
        <input type="text" maxLength="4" name="yearOfpassing" />
      </td>
      <td colSpan={1} style={{ textAlign: 'center', backgroundColor: '#F2F2F2' }}>
        <input type="text" maxLength="2" name="percentage" style={{ width: '50%', textAlign: 'center' }} />
      </td>
      <td colSpan={1}style={{ backgroundColor: '#F2F2F2' }}>
        <input name="degree" className="upload_field" type="file" />
      </td>
    </tr>
    <tr>
      <td colSpan={3}>
        <input type="text" />
      </td>
      <td colSpan={1}>
        <input type="text" maxLength="4" name="yearOfpassing" />
      </td>
      <td colSpan={1} style={{ textAlign: 'center' }}>
        <input type="text" maxLength="3" name="percentage" style={{ width: '50%', textAlign: 'center' }} />
      </td>
      <td colSpan={1}>
        <input name="degree" className="upload_field" type="file" />
      </td>
    </tr>
    <tr>
      <td colSpan={3}style={{ backgroundColor: '#F2F2F2' }}>
        <input type="text" />
      </td>
      <td colSpan={1}style={{ backgroundColor: '#F2F2F2' }}>
        <input type="text" maxLength="4" name="yearOfPassing" />
      </td>
      <td colSpan={1} style={{ textAlign: 'center' , backgroundColor: '#F2F2F2' }}>
        <input type="text" maxLength="3" name="percentage" style={{ width: '50%', textAlign: 'center' }} />
      </td>
      <td colSpan={1}style={{ backgroundColor: '#F2F2F2' }}>
        <input name="degree" className="upload_field" type="file" />
      </td>
    </tr>
    <tr>
      <td className="field_no">31.</td>
      <td className="field_name">Whether have you requested?</td>
      <td colSpan={6}>
        <div className="checkbox_style">
          <div className="check_box form-check">
            <input name="material" type="radio" className="form-check-input" />
            <label title="" className="form-check-label">E-books</label>
          </div>
          <div className="check_box form-check">
            <input name="material" type="radio" className="form-check-input" />
            <label title="" className="form-check-label">Printed Books</label>
          </div>
          <div className="check_box form-check">
            <input name="material" type="radio" className="form-check-input" />
            <label title="" className="form-check-label">Both</label>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td className="field_no"style={{ backgroundColor: '#F2F2F2' }}>32.</td>
      <td className="field_name"style={{ backgroundColor: '#F2F2F2' }}>Self-Learning material can get through?</td>
      <td colSpan={6}style={{ backgroundColor: '#F2F2F2' }}>
        <div className="checkbox_style">
          <div className="check_box form-check">
            <input name="self_learn" type="radio" className="form-check-input" />
            <label title="" className="form-check-label">Courier</label>
          </div>
          <div className="check_box form-check">
            <input name="self_learn" type="radio" className="form-check-input" />
            <label title="" className="form-check-label">Indian Post</label>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td className="field_no">33.</td>
      <td colSpan={7}>
        <div>
          <b>Fee paid Details</b>
          <p>
            For all the Programmes, the fees shall be paid to the VISTAS-CDOE through online.
            For online payment Account No:<b>923010045038449</b>,
            Account Name: <b>VISTAS- CDOE</b>,
            IFSC Code:<b>UTIB0000083</b>,
            Bank Name: <b>Axis Bank Ltd</b>,
            Branch:<b> Madipakkam, Chennai</b>
            <br />
            <br></br>
            <input
        type="text"
        placeholder='Enter Amount'
        value={amount}
        onChange={(e) => setamount(e.target.value)}
      />
            <button type="button" className="btn btn-primary"onClick={handleSubmit} >Click Here To Pay Fees</button>
          </p>
        </div>
      </td>
    </tr>
    <tr className="field_value">
      <td colSpan={2}>Online Payment Details</td>
      <td colSpan={2}>Amount Paid</td>
      <td colSpan={2}>Bank Name</td>
      <td colSpan={2}>Date</td>
    </tr>
    <tr className="payment_details">
      <td colSpan={2}><input type="text" /></td>
      <td colSpan={2}><input type="text" /></td>
      <td colSpan={2}><input type="text" /></td>
      <td colSpan={2}><input type="text" /></td>
    </tr>
  
        </tbody>

      </Table></div>
      </div>
     
      
    </div>
  );
};

export default YourComponent;
