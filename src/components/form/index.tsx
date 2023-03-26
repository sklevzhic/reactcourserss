import './index.css';

import React, { createRef } from 'react';
import { validateDate, validateImage, validateText } from '../../utils/validate';
import { IPhoto } from '../../models/IPhoto';

interface ReportFormProps {
  handleSubmitForm: (data: IPhoto) => void;
}

interface ReportFormState {
  isTitleValid: boolean;
  isDateValid: boolean;
  isViewsValid: boolean;
  isShowDescriptionValid: boolean;
  isCopyrightHolderValid: boolean;
  isImageValid: boolean;
}

class Form extends React.Component<ReportFormProps, ReportFormState> {
  titleRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  viewsRef: React.RefObject<HTMLSelectElement>;
  isShowDescriptionRef: React.RefObject<HTMLInputElement>;
  copyrightHolderRefYes: React.RefObject<HTMLInputElement>;
  copyrightHolderRefNo: React.RefObject<HTMLInputElement>;
  imageRef: React.RefObject<HTMLInputElement>;

  constructor(props: ReportFormProps) {
    super(props);
    this.titleRef = createRef();
    this.dateRef = createRef();
    this.viewsRef = createRef();
    this.isShowDescriptionRef = createRef();
    this.copyrightHolderRefYes = createRef();
    this.copyrightHolderRefNo = createRef();
    this.imageRef = createRef();

    this.state = {
      isTitleValid: true,
      isDateValid: true,
      isViewsValid: true,
      isShowDescriptionValid: true,
      isCopyrightHolderValid: true,
      isImageValid: true,
    };
  }

  validateForm = () => {
    const isTitleValid = validateText(this.titleRef.current?.value);
    const isDateValid = validateDate(this.dateRef.current?.value);
    const isViewsValid = Boolean(this.viewsRef.current?.value);
    const isCopyrightHolderValid =
      this.copyrightHolderRefYes.current!.checked || this.copyrightHolderRefNo.current!.checked;

    const noFile = !this.imageRef.current?.value;
    const isImageValid = validateImage(this.imageRef.current?.value) || noFile;

    this.setState({
      isTitleValid,
      isDateValid,
      isViewsValid,
      isCopyrightHolderValid,
      isImageValid,
    });

    return isTitleValid && isDateValid && isViewsValid && isCopyrightHolderValid && isImageValid;
  };

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const isFormDataValid = this.validateForm();
    if (isFormDataValid) {
      const fReader = new FileReader();
      let url = '';
      fReader.readAsDataURL(this.imageRef.current!.files![0]);
      fReader.onload = function (event) {
        const result = fReader.result;
        if (typeof result === 'string') {
          url = result;
        }
      };
      const formData = {
        id: Date.now(),
        title: this.titleRef.current!.value,
        thumbnailUrl: this.imageRef.current!.value,
        url: this.imageRef.current!.value,
        date: this.dateRef.current!.value,
        views: +this.viewsRef.current!.value,
        likes: 0,
        isShowDescription: this.isShowDescriptionRef.current!.checked,
        isCopyrightHolder: this.isShowDescriptionRef.current!.checked,

        file: this.imageRef.current!.files![0]
          ? URL.createObjectURL(this.imageRef.current!.files![0])
          : '',
      };
      this.props.handleSubmitForm(formData);
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} aria-label="form">
          <label htmlFor="title">
            <span>Title:</span>
            <input id="title" type="text" name="title" ref={this.titleRef} />
          </label>
          {/* {!this.state.isFirstNameValid && ( */}
          {/*   <p className={s.errorMessage}> */}
          {/*     First name is required and should be at least 3 characters long and the first letter */}
          {/*     should be in upper case */}
          {/*   </p> */}
          {/* )} */}
          <hr />


          <label htmlFor="date">
            <span>Date publish:</span>
            <input id="date" type="date" name="date" ref={this.dateRef} />
          </label>
          {/* {!this.state.isDateValid && ( */}
          {/*   <p className={s.errorMessage}> */}
          {/*     The accident date is required and couldn&apos;t have happened in the future */}
          {/*   </p> */}
          {/* )} */}
          <hr />

          <label htmlFor="views">
            <span>Views:</span>
            <select name="views" id="views" ref={this.viewsRef}>
              <option value="">Choose views</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </label>
          {/* {!this.state.isLocationValid && ( */}
          {/*   <p className={s.errorMessage}>Please, choose the accident location</p> */}
          {/* )} */}
          <hr />

          <label htmlFor="isShowDescription">
            <span>Description:</span>
            <input type="checkbox" name="isShowDescription" ref={this.isShowDescriptionRef} />
          </label>
          <hr />

          <p>copyright Holder: </p>
          <label htmlFor="copyrightHolderYes">
            <span>Yes</span>
            <input
              id="copyrightHolderYes"
              type="radio"
              name="copyrightHolder"
              value="Yes"
              ref={this.copyrightHolderRefYes}
            />
          </label>
          <label htmlFor="copyrightHolderNo">
            <span>No</span>
            <input
              id="copyrightHolderNo"
              type="radio"
              name="copyrightHolder"
              value="No"
              ref={this.copyrightHolderRefNo}
            />
          </label>
          {/* {!this.state.isInjuriesValid && ( */}
          {/*   <p className={s.errorMessage}>Please, choose one of the options</p> */}
          {/* )} */}
          <hr />

          <label htmlFor="evidence">
            <span>Image:</span>
            <input
              type="file"
              name="evidence"
              ref={this.imageRef}
              accept="image/*"
              data-testid="file-input"
            />
          </label>
          {/* {!this.state.isFileValid && ( */}
          {/*   <p className={s.errorMessage}> */}
          {/*     We only support files with jpeg, jpg, png, svg, gif, webp extensions */}
          {/*   </p> */}
          {/* )} */}

          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default Form;
