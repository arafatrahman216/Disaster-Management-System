import React from 'react'
import '../assets/CSS/Statistics.css';

const Statistics = () => {
  return (
    <section class="statis">
          <div class="row">
            <div class="col-md-6 col-lg-3 mb-4 mb-lg-0" id='IR'>
              <div class="box">
                <h3>5,154</h3>
                <p class="lead">Incidents Registered</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-4 mb-lg-0" id='Com'>
              <div class="box bg-danger p-3">
                <h3>245</h3>
                <p class="lead">Communities</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-4 mb-md-0" id='TDon'>
              <div class="box bg-warning p-3">
                <h3>BDT 5,154</h3>
                <p class="lead">Total Donations</p>
              </div>
            </div>
          

            <div class="col-md-6 col-lg-3 mb-4 mb-lg-0" id='AP'>
              <div class="box bg-success p-3">
                <h3>5,154</h3>
                <p class="lead">Affected People</p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 mb-4 mb-lg-0" id='PS'>
              <div class="box bg-success p-3">
                <h3>5,154</h3>
                <p class="lead">Saved People</p>
              </div>
            </div>

          <div class="col-md-6 col-lg-3 mb-4 mb-lg-0" id='VC'>
              <div class="box bg-success p-3">
                <h3>5,154</h3>
                <p class="lead">Volunteers</p>
              </div>
            </div>
          </div>
      </section>
  )
}


export {Statistics};
