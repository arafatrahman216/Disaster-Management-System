import React from 'react'
import '../assets/CSS/Statistics.css';

const Statistics = () => {
  return (
    <section className="statis">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0" id='IR'>
              <div className="box">
                <h3>5,154</h3>
                <p className="lead">Incidents Registered</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0" id='Com'>
              <div className="box bg-danger p-3">
                <h3>245</h3>
                <p className="lead">Communities</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-md-0" id='TDon'>
              <div className="box bg-warning p-3">
                <h3>BDT 5,154</h3>
                <p className="lead">Total Donations</p>
              </div>
            </div>
          

            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0" id='AP'>
              <div className="box bg-success p-3">
                <h3>5,154</h3>
                <p className="lead">Affected People</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0" id='PS'>
              <div className="box bg-success p-3">
                <h3>5,154</h3>
                <p className="lead">Saved People</p>
              </div>
            </div>

          <div className="col-md-6 col-lg-3 mb-4 mb-lg-0" id='VC'>
              <div className="box bg-success p-3">
                <h3>5,154</h3>
                <p className="lead">Volunteers</p>
              </div>
            </div>
          </div>
      </section>
  )
}


export {Statistics};
