import { TitleHelp, StyledForm, FormField, InputField, SendButton, Textarea} from './NeedHelp.styled';
import { Formik, ErrorMessage } from 'formik';

function NeedHelp({ onClose }) {
  return (
    <>
      <TitleHelp>Need help</TitleHelp>
      <Formik
        initialValues={{
          email: '',
          comment: ''
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm onChange={() => setErrorMessage(null)}>
            <FormField>
              <InputField
                autoFocus
                name="email"
                type="email"
                placeholder="Email address"
              />
              <ErrorMessage name="email" component="div" />
            </FormField>
            <FormField>
              <Textarea
                name="comment"
                component="textarea"
                placeholder="Comment"
              />
              <ErrorMessage name="comment" component="div" />
            </FormField>
            <SendButton disabled={isSubmitting}>Send</SendButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
}

export default NeedHelp;