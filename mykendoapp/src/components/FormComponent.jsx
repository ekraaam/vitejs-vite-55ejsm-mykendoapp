
import { Form, Field, FormElement, FieldWrapper } from '@progress/kendo-react-form';
import { Error } from '@progress/kendo-react-labels';
import { Input } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) =>
  emailRegex.test(value) ? "" : "Please enter a valid email.";
const EmailInput = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div className="k-form-field-wrap">
      <Input {...others} labelClassName={"k-form-label"} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};
export const FormComponent=()=>{
  const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
  return (
<div>
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement
          style={{
            maxWidth: 650,
            margin: 30,
          }}
        >
          <fieldset className={"k-form-fieldset"}>
            <legend className={"k-form-legend"}>
              Please fill in the fields:
            </legend>
            <FieldWrapper>
              <div className="k-form-field-wrap">
                <Field
                  name={"firstName"}
                  component={Input}
                  labelClassName={"k-form-label"}
                  label={"First name"}
                />
              </div>
            </FieldWrapper>

            <FieldWrapper>
              <div className="k-form-field-wrap">
                <Field
                  name={"lastName"}
                  component={Input}
                  labelClassName={"k-form-label"}
                  label={"Last name"}
                />
              </div>
            </FieldWrapper>

            <FieldWrapper>
              <Field
                name={"email"}
                type={"email"}
                component={EmailInput}
                label={"Email"}
                validator={emailValidator}
              />
            </FieldWrapper>
          </fieldset>
          <div className="k-form-buttons">
            <Button
              themeColor={'primary'}
              type={"submit"}
              className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
              disabled={!formRenderProps.allowSubmit}
            >
              Submit
            </Button>
          </div>
        </FormElement>
      )}
    />
    </div>
  );
}