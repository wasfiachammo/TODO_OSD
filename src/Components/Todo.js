import React,{useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Logo1 from '../images/Logo1.png';
import Search from '../images/Search.png';
import Add from '../images/Add.png';
import Circle from '../images/Circle.png';
import Bitmap from '../images/Bitmap.png';
import ToDoIcon from '../images/ToDoIcon.png';
import DoingIcon from '../images/DoingIcon.png';
import DoneIcon from '../images/DoneIcon.png';
import ShowQuoteIcon from '../images/ShowQuoteIcon.png';
import RemoveQuote from '../images/RemoveQuote.png'

const Todo = () => {
  document.body.style.overflow='hidden';
 
    const [selectedImportance, setSelectedImportance] = useState('null');
  
    const handleImportanceChangeTo = (e) => {
      setSelectedImportance(e.target.value);
    }

    const [selectedImportanceDoing, setSelectedImportanceDoing] = useState('null');
  
    const handleImportanceChangeDoing = (a) => {
      setSelectedImportanceDoing(a.target.value);
    }
  

    const [selectedImportanceDone, setSelectedImportanceDone] = useState('null');
  
    const handleImportanceChangeDone = (a) => {
      setSelectedImportanceDone(a.target.value);
    }

    const [quoteVisible, setQuoteVisible] = useState(false);

    const toggleQuote = () => {
      setQuoteVisible(!quoteVisible);
    };
    const closeQuote = () => {
      setQuoteVisible(false);
    };
  return (
    <section className="container-fuild">
      <div className="row">
        <div className="col-md-2 col-lg-1 m-3 mt-0">
          <img src={Logo1} alt="Logo" style={{ width: '100%', height: 'auto' }} />
        </div>

        <div className="col-md-10 col-lg-10 text-end mt-3 m-0 position-relative">
          <div
            style={{ width: '24px', height: '24px', opacity: 1, marginLeft: '45%', overflow: 'hidden' }}
            className="position-absolute top-1 start-50 translate-middle mt-3"
          >
            <img src={Search} alt="Search Icon" style={{ width: '100%', height: 'auto' }} />
          </div>

          <div
            className="position-absolute start-50 translate-middle top-1 mt-3"
            style={{
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '49%',
            }}
          >
            <img
              src={Circle}
              alt="Circle Icon"
              style={{ width: '25px', height: '25px', borderRadius: '50%', position: 'absolute' }}
            />
            <img src={Add} alt="Add Icon" style={{ width: '10px', height: '10px', zIndex: 2, position: 'relative' }} />
          </div>

          <div
            className="position-absolute top-1 start-100 translate-middle mt-3"
            style={{ width: '42px', height: '42px', opacity: 1, overflow: 'hidden', borderRadius: '50%', marginLeft: '50px' }}
          >
            <img src={Bitmap} alt="Bitmap" style={{ width: '100%', height: 'auto', borderRadius: '50%' }} />
          </div>
        </div>


      
        <div>
      {quoteVisible && (
        <div
          className="position-absolute"
          style={{
            top: '80px',
            left: '0px',
            width: '100%',
            height: '68px',
            background: 'linear-gradient(180deg, #6E4C85 0%, #2D2B52 100%)',
            opacity: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            className="m-4"
            style={{
              color: '#FFFFFF',
              textAlign: 'left',
              font: 'italic normal normal 20px/18px HelveticaNeue',
              letterSpacing: '0px',
              opacity: 1,
            }}
          >
            <p>"Anything that can go wrong, will go wrong!"</p>
          </div>
          <div
            style={{
              width: '24px',
              height: '24px',
              background: 'transparent',
              opacity: 1,
              cursor: 'pointer',
            }}
            onClick={closeQuote}
          >
            <img src={RemoveQuote} alt="Remove Quote" />
          </div>
        </div>
      )}

      <div
        className="position-absolute"
        style={{
          top: '60px',
          right: '20px', // Adjust the position as needed
          width: '24px',
          height: '24px',
          background: 'transparent',
          opacity: 1,
          cursor: 'pointer',
        }}
        onClick={toggleQuote}
      >
        <img src={ShowQuoteIcon} alt="Show Quote Icon" />
      </div>
    </div>
        
{/* First Column */}

{/* TodoBackground */}
<div className="position-absolute" style={{ top: '168px', left: '34px', width: '422px', height: '48px', background: '#FFFFFF', boxShadow: '0px 3px 6px #00000029', borderRadius: '6px', opacity: 1 }}>
  <div className="d-flex align-items-center mt-2">
    <div style={{ width: '23px', height: '22px', background: 'transparent', opacity: 1 }}>
      <img src={ToDoIcon} alt="To-Do Icon" />
    </div>
    <div
      className='ms-2'
      style={{
        top: '182px',
        left: '90px',
        width: '50px',
        height: '21px',
        color: '#212529',
        textAlign: 'left',
        font: 'normal normal medium 18px/21px HelveticaNeue',
        letterSpacing: '0px',
        opacity: 1,
      }}
    >
      ToDo
    </div>
  </div>
</div>

{/* ToDo Component */}
<div
  className="position-absolute"
  style={{
    top: '226px',
    left: '35px',
    width: '418px',
    height: '300px',
    background: '#FFFFFF', 
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.29)', 
    borderRadius: '6px',
    opacity: 1,
  }}
>
  <div
    className='ms-2 mt-2'
    style={{
      top: '242px',
      left: '49px',
      width: '368px',
      height: '44px',
      textAlign: 'left',
      fontSize: '16px',
      fontFamily: 'HelveticaNeue',
      fontWeight: 'normal',
      lineHeight: '24px',
      letterSpacing: '0px',
      color: '#000000',
      opacity: 1,
    }}
  >
    Prepare the assay 
  </div>
<div className="d-flex align-items-center mt-2">
    <div
      className="ms-2"
      style={{
        top: '285px',  
        left: '49px',
        width: '45px',
        height: '14px',
        textAlign: 'left',
        fontSize: '12px',
        fontWeight: 'normal',
        lineHeight: '18px',
        letterSpacing: '0px',
        color: '#6C757D',
        opacity: 1,
      }}
    >
      Category
    </div>
    <div className="ms-5">
      <input type="text" className="form-control shadow-sm" style={{ height: '35px',width:'220px' }} pattern="[A-Za-z]+" />
    </div>
  </div>


  <div className="d-flex align-items-center mt-2">
  <div
    className="ms-2 mt-3"
    style={{
      top: '321px',
      left: '50px',
      width: '80px',
      height: '15px',
      textAlign: 'left',
      fontSize: '13px',
      fontWeight: 'normal',
      lineHeight: '20px',
      letterSpacing: '0px',
      color: '#6C757D',
      opacity: 1,
    }}
  >
    Due Date
  </div>

  <div
    className="container ms-0"
    style={{
      height: '8px',
      textAlign: 'left',
      fontSize: '10px',
      fontWeight: '100',
      lineHeight: '10px',
      letterSpacing: '0px',
      color: '#000000',
      opacity: 1,
      width: '300px',
    }}
  >
    <DatePicker
      dateFormat="dd/MM/yyyy"
      className="form-control shadow-sm"
    />
  </div>
</div>


<div className="d-flex align-items-center mt-5">
<div
  className="ms-2 mt-0"
  style={{
    top: '358px',
    left: '50px',
    width: '46px',
    height: '15px',
    textAlign: 'left',
    fontSize: '13px', 
    fontWeight: 'normal',
    lineHeight: '20px',
    letterSpacing: '0px',
    color: '#6C757D',
    opacity: 1,
  }}
>
  Estimate
</div>
<div className="ms-5 mt-0">
<input type="text" className="form-control shadow-sm" style={{width: '220px',height: '35px'}} />
</div>
</div>

<div className="d-flex align-items-center mt-4">
      <div
        className="ms-2 mt-0"
        style={{
          top: '395px',
          left: '50px',
          width: '80px',
          height: '15px',
          textAlign: 'left',
          fontSize: '13px',
          fontWeight: 'normal',
          lineHeight: '20px',
          letterSpacing: '0px',
          color: '#6C757D',
          opacity: 1,
        }}
      >
        Importance
      </div>
      <div className="ms-5 mt-0">
        <select
          className="form-select"
          style={{
            width: '120px',
            height: '35px',
            textAlign: 'center',
            font: 'normal normal 300 13px/20px HelveticaNeue',
            letterSpacing: '0px',
            backgroundColor: selectedImportanceDone=== 'Low' ? 'green' : selectedImportanceDone === 'Medium' ? 'yellow' : selectedImportanceDone=== 'High' ? 'red' : null,
            color: 'black',
          }}
          value={selectedImportanceDone}
          onChange={handleImportanceChangeDone}
        >
          <option value=""></option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
    </div>
</div>
 
  



{/* second column  */}
{/* Doing background */}
  <div
  className="position-absolute"
  style={{
    top: '168px',
    left: '485px',
    width: '423px',
    height: '48px',
    background: '#FFFFFF', 
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.29)',
    borderRadius: '6px',
    opacity: 1,
  }}>

<div className="d-flex align-items-center mt-2">
<div className='mt-0' style={{ top: '180px', left: '502px', width: '29px', height: '25px', background: 'transparent ', opacity: 1 }}>
   <img src={DoingIcon} alt="Doing Icon"/>
</div>


<div
className='ms-2' 
  style={{
    top: '182px',
    left: '546px',
    width: '49px',
    height: '21px',
    color: '#212529', 
    textAlign: 'left',
    fontSize: '18px', 
    fontFamily: 'HelveticaNeue',
    fontWeight: 'normal',
    lineHeight: '21px',
    letterSpacing: '0px',
    opacity: 1,
  }}
> Doing </div>
</div>
</div>
{/* Doing Component */}
<div
  className="position-absolute "
  style={{
    top: '225px',
    left: '487px',
    width: '418px',
    height: '300px',
    background: '#FFFFFF', 
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.29)', 
    borderRadius: '6px',
    opacity: 1,
  }}
>
<div
    className='ms-2 mt-2'
    style={{
      top: '242px',
      left: '49px',
      width: '368px',
      height: '44px',
      textAlign: 'left',
      fontSize: '16px',
      fontFamily: 'HelveticaNeue',
      fontWeight: 'normal',
      lineHeight: '24px',
      letterSpacing: '0px',
      color: '#000000',
      opacity: 1,
    }}
  >
    Translate the resume
  </div>
  <div className="d-flex align-items-center mt-2">
    <div
      className="ms-2"
      style={{
        top: '285px',  
        left: '49px',
        width: '45px',
        height: '14px',
        textAlign: 'left',
        fontSize: '12px',
        fontWeight: 'normal',
        lineHeight: '18px',
        letterSpacing: '0px',
        color: '#6C757D',
        opacity: 1,
      }}
    >
      Category
    </div>
    <div className="ms-5">
      <input type="text" className="form-control shadow-sm" style={{ height: '35px',width:'220px' }} />
    </div>
  </div>

  <div className="d-flex align-items-center mt-2">
  <div
    className="ms-2 mt-3"
    style={{
      top: '321px',
      left: '50px',
      width: '80px',
      height: '15px',
      textAlign: 'left',
      fontSize: '13px',
      fontWeight: 'normal',
      lineHeight: '20px',
      letterSpacing: '0px',
      color: '#6C757D',
      opacity: 1,
    }}
  >
    Due Date
  </div>

  <div
    className="container ms-0"
    style={{
      height: '8px',
      textAlign: 'left',
      fontSize: '10px',
      fontWeight: '100',
      lineHeight: '10px',
      letterSpacing: '0px',
      color: '#000000',
      opacity: 1,
      width: '300px',
    }}
  >
    <DatePicker
      dateFormat="dd/MM/yyyy"
      className="form-control shadow-sm"
    />
  </div>
</div>


<div className="d-flex align-items-center mt-5">
<div
  className="ms-2 mt-0"
  style={{
    top: '358px',
    left: '50px',
    width: '46px',
    height: '15px',
    textAlign: 'left',
    fontSize: '13px', 
    fontWeight: 'normal',
    lineHeight: '20px',
    letterSpacing: '0px',
    color: '#6C757D',
    opacity: 1,
  }}
>
  Estimate
</div>
<div className="ms-5 mt-0">
<input type="text" className="form-control shadow-sm" style={{width: '220px',height: '35px'}} />
</div>
</div>

<div className="d-flex align-items-center mt-4">
      <div
        className="ms-2 mt-0"
        style={{
          top: '395px',
          left: '50px',
          width: '80px',
          height: '15px',
          textAlign: 'left',
          fontSize: '13px',
          fontWeight: 'normal',
          lineHeight: '20px',
          letterSpacing: '0px',
          color: '#6C757D',
          opacity: 1,
        }}
      >
        Importance
      </div>
      <div className="ms-5 mt-0">
        <select
          className="form-select"
          style={{
            width: '120px',
            height: '35px',
            textAlign: 'center',
            font: 'normal normal 300 13px/20px HelveticaNeue',
            letterSpacing: '0px',
            backgroundColor: selectedImportanceDoing=== 'Low' ? 'green' : selectedImportanceDoing === 'Medium' ? 'yellow' : selectedImportanceDoing=== 'High' ? 'red' : null,
            color: 'black',
          }}
          value={selectedImportanceDoing}
          onChange={handleImportanceChangeDoing}
        >
          <option value=""></option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
    </div>





</div>






{/* Third Column */}
<div
  className="position-absolute"
  style={{
    top: '168px',
    left: '937px',
    width: '422px',
    height: '48px',
    background: '#FFFFFF',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.29)', 
    borderRadius: '6px',
    opacity: 1,
  }}
>
<div className="d-flex align-items-center mt-2">
<div
className='mt-0' 
  style={{
    top: '179px',
    left: '952px',
    width: '29px',
    height: '26px',
    background: 'transparent',
    opacity: 1,
  }}
>
    <img src={DoneIcon} alt="Done Icon"/>
</div>
<div
className='ms-2'
  style={{
    top: '181px',
    left: '998px',
    width: '44px',
    height: '21px',
    color: '#212529', 
    textAlign: 'left',
    fontSize: '18px',
    fontFamily: 'HelveticaNeue',
    fontWeight: 'normal',
    lineHeight: '21px',
    letterSpacing: '0px',
    opacity: 1,
  }}
>
  Done
</div>
</div>
</div>

<div
  className="position-absolute  "
  style={{
    top: '225px',
    left: '940px',
    width: '418px',
    height: '300px',
    background: '#FFFFFF', 
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.29)', 
    borderRadius: '6px',
    opacity: 1,
  }}
>
<div
    className='ms-2 mt-2'
    style={{
      top: '242px',
      left: '49px',
      width: '368px',
      height: '44px',
      textAlign: 'left',
      fontSize: '16px',
      fontFamily: 'HelveticaNeue',
      fontWeight: 'normal',
      lineHeight: '24px',
      letterSpacing: '0px',
      color: '#000000',
      opacity: 1,
    }}
  >
    Prepare the XD design
  </div>
  <div className="d-flex align-items-center mt-2">
    <div
      className="ms-2"
      style={{
        top: '285px',  
        left: '49px',
        width: '45px',
        height: '14px',
        textAlign: 'left',
        fontSize: '12px',
        fontWeight: 'normal',
        lineHeight: '18px',
        letterSpacing: '0px',
        color: '#6C757D',
        opacity: 1,
      }}
    >
      Category
    </div>
    <div className="ms-5">
      <input type="text" className="form-control shadow-sm" style={{ height: '35px',width:'220px' }} />
    </div>
  </div>

  <div className="d-flex align-items-center mt-2">
  <div
    className="ms-2 mt-3"
    style={{
      top: '321px',
      left: '50px',
      width: '80px',
      height: '15px',
      textAlign: 'left',
      fontSize: '13px',
      fontWeight: 'normal',
      lineHeight: '20px',
      letterSpacing: '0px',
      color: '#6C757D',
      opacity: 1,
    }}
  >
    Due Date
  </div>

  <div
    className="container ms-0"
    style={{
      height: '8px',
      textAlign: 'left',
      fontSize: '10px',
      fontWeight: '100',
      lineHeight: '10px',
      letterSpacing: '0px',
      color: '#000000',
      opacity: 1,
      width: '300px',
    }}
  >
    <DatePicker
      dateFormat="dd/MM/yyyy"
      className="form-control shadow-sm"
    />
  </div>
</div>


<div className="d-flex align-items-center mt-5">
<div
  className="ms-2 mt-0"
  style={{
    top: '358px',
    left: '50px',
    width: '46px',
    height: '15px',
    textAlign: 'left',
    fontSize: '13px', 
    fontWeight: 'normal',
    lineHeight: '20px',
    letterSpacing: '0px',
    color: '#6C757D',
    opacity: 1,
  }}
>
  Estimate
</div>
<div className="ms-5 mt-0">
<input type="text" className="form-control shadow-sm" style={{width: '220px',height: '35px'}} />
</div>
</div>

<div className="d-flex align-items-center mt-4">
      <div
        className="ms-2 mt-0"
        style={{
          top: '395px',
          left: '50px',
          width: '80px',
          height: '15px',
          textAlign: 'left',
          fontSize: '13px',
          fontWeight: 'normal',
          lineHeight: '20px',
          letterSpacing: '0px',
          color: '#6C757D',
          opacity: 1,
        }}
      >
        Importance
      </div>
      <div className="ms-5 mt-0">
        <select
          className="form-select"
          style={{
            width: '120px',
            height: '35px',
            textAlign: 'center',
            font: 'normal normal 300 13px/20px HelveticaNeue',
            letterSpacing: '0px',
            backgroundColor: selectedImportance === 'Low' ? 'green' : selectedImportance === 'Medium' ? 'yellow' : selectedImportance === 'High' ? 'red' : null,
            color: 'black',
          }}
          value={selectedImportance}
          onChange={handleImportanceChangeTo}
        >
          <option value=""></option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
    </div>


</div>



      </div>

</section>

    
   
);
}
export default Todo;