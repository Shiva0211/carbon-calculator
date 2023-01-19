import React from "react";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const Travels = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const agreebtn = () => {
    window.location.href = "/Results";
  };
  return (
    <React.Fragment>
      <div>
        <center>
          <h4>Holiday</h4>
        </center>
      </div>
      <center>
        <div>
          <h6 style={{ color: "#7f7f7f" }}>
            Fuel used by aircrafts contribute significantly to the carbon
            footprint.
            <br></br>
            <br></br>
            <b>
              How many flights have you taken to the following regions this
              month? <br></br>
              <br></br>Excludes business trips. Return flight is considered as 2
              flights.
            </b>
          </h6>
        </div>
        <a
          href="https://pages.up.spdigital.sg/internal/co2e/countries"
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          See list of countries for reference
        </a>
      </center>
      <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label for="sasia">
              <h6>Southeast Asia</h6>
            </label>
            <input
              type="number"
              id="sasia"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              pattern="[0-9]"
              placeholder="0 (Number of times)"
              required
            />
            {"<"}3 hr flights
          </div>
          <br></br>
          <div>
            <label for="apacific">
              <h6>Asia Pacific</h6>
            </label>
            <input
              type="number"
              id="apacific"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              pattern="[0-9]"
              placeholder="0 (Number of times)"
              required
            />
            3 - 8 hr flights
          </div>
          <br></br>
          <div>
            <label for="eurafr">
              <h6>Europe/Africa</h6>
            </label>
            <input
              type="number"
              id="eurafr"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              pattern="[0-9]"
              placeholder="0 (Number of times)"
              required
            />
            8 - 14 hr flights
          </div>
          <br></br>
          <div>
            <label for="oceania">
              <h6>Oceania</h6>
            </label>
            <input
              type="number"
              id="oceania"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              pattern="[0-9]"
              placeholder="0 (Number of times)"
              required
            />
            11 - 14 hr flights
          </div>
          <br></br>
          <div>
            <label for="Americas">
              <h6>Americas</h6>
            </label>
            <input
              type="number"
              id="Americas"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              pattern="[0-9]"
              placeholder="0 (Number of times)"
              required
            />
            ≥14 hr flights
          </div>
          <br></br>
          <div>
            <label for="tc">
              <h6>Which travel class do you usually travel in ?</h6>
            </label>
            <br></br>
            <select
              id="tc"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Budget/Economy</option>
              <option value="Premium-economy">{"<"}Premium Economy</option>
              <option value="Business">Business</option>
              <option value="First">{">"}First</option>
            </select>
          </div>
          <br></br>
          <div>
            <label for="vacation">
              <h6>How many nights of staycation did you take in this month?</h6>
            </label>
            <br></br>
            <select
              id="vacation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Budget/Economy</option>
              <option value="Premium-economy">{"<"}Premium Economy</option>
              <option value="Business">Business</option>
              <option value="First">{">"}First</option>
            </select>
          </div>
          <br></br>
          <div>
            <center>
              <Button variant="outlined" onClick={handleClickOpen}>
                Calculate
              </Button>
            </center>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                &emsp;&ensp;{"Terms and conditions:"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <ol>
                    <li>
                      By accessing and using my Carbon Footprint, you agree to
                      be bound by the SP Group's Terms and Conditions of Use.
                    </li>
                    <br></br>
                    <li>
                      You consent that your personal information (including
                      without limitation your email) may be collected, used,
                      disclosed, stored, transferred and/or otherwise processed
                      by SP Impact Pte Ltd, its affiliates and partners to
                      calculate your carbon footprint and in accordance with SP
                      Group's Personal Data Protection Policy.
                    </li>
                    <br></br>
                    <li>
                      SP Impact Pte Ltd reserves the right to amend these Terms
                      and Conditions or to discontinue/terminate my Carbon
                      Footprint without prior notice to you.
                    </li>
                  </ol>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={agreebtn()} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <center></center>
        </div>
        <center></center>
        <br></br>
      </form>
    </React.Fragment>
  );
};
export default Travels;
