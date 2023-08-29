import  { useState } from "react";
import { Formik, Form } from 'formik';
import avatarImg from '../../../images/user-zaglushka.png';

import {
  WindowContaier,
  ModalTitle,
  AvatarWrapper,
  AvatarImg,
  FileInputWrapper,
  FileInput,

  ProfileInput,
  SendButton,
  StyledEyeIcon,  
  StyledEyeIconVis 
} from './EditProfile.styled';

export const EditProfile = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <WindowContaier>
            <ModalTitle>Edit Profile</ModalTitle>
            <AvatarWrapper>
                <AvatarImg src={avatarImg} alt="avatar" />
                <FileInputWrapper>
                    <FileInput type="file" accept="image/jpeg, image/png, image/gif" />
                    +
                </FileInputWrapper>
            </AvatarWrapper>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                }}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.setSubmitting(false); 
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <ProfileInput type="text" name="name" placeholder="Name" required />
                        <ProfileInput type="text" name="email" placeholder="Email" required />
                        <label style={{ position: 'relative' }}>
                            <ProfileInput 
                                type={showPassword ? "text" : "password"} 
                                name="password" 
                                placeholder="Password" 
                                required 
                            />
                            
                            <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={handleTogglePassword}>
                                {showPassword ? <StyledEyeIcon /> : <StyledEyeIconVis />}
                            </span>
                        </label>
                        <SendButton type="submit" disabled={isSubmitting}>Send</SendButton>
                    </Form>
                )}
            </Formik>
        </WindowContaier>
    );
};