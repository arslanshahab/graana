import React from 'react';
import styles from "./Form.module.scss";
import wantedButton from "../wantedButton/Button";
import buyImg from "../../../../assets/images/sell-icon.svg";
import sellImg from "../../../../assets/images/rent-icon.svg";
import {Button} from "../../../../components/Button/Button";

const Form = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <span className={styles.section_text}>Tell us what you need</span>
        <div className={styles.section_btn}>
          <wantedButton title="Buy" img={buyImg} altText="Buy Button" />
          <wantedButton title="Sell" img={sellImg} altText="Sell Button" />
        </div>
        <span className={styles.form_text}>Provide details by filling out the form</span>
        <div class="mb-3">
          <input type="text" className="form-control" placeholder='House' aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <input type="text" className="form-control" placeholder='City Of Interest' aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <input type="text" className="form-control" placeholder='Area Of Interest' aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <input type="text" className="form-control" placeholder='Name' aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <input type="text" className="form-control" placeholder='+92--- -------' aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <textarea class="form-control" rows="3" placeholder='additional Detail'></textarea>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">I have read and agree to the Graana’s Term of Service</label>
        </div>
        <Button title="Submit"/>
      </div>
    </div>
  )
}

export default Form;






    // <button type="submit" class="btn btn-primary">Submit</button>
