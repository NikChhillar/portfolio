import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import { SectionLayout } from "../../styles/Layout";
import { useTheme } from "../../context/themeContext";
import Title from "../Title";
import Button from "../Button";

const Contact = () => {
  const theme = useTheme();

  // 

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_827ohfd', 'template_z04k0da', form.current, 'tH2NwfOk-MbzH28jW')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        e.target.reset();
      });
  };

  // 
  return (
    <ContactStyled id="contact" theme={theme}>
      <Title
        name={"Lets Talk"}
        desc={"..."}
      />
      <div className="contact-info">

        <form ref={form} onSubmit={sendEmail} className="form-section">
          <div className="input-control">
            <input name="name" type="text" placeholder="Your name" />
            <input name="email" type="email" placeholder="Email address" />
          </div>
          <div className="input-control">
            <input name="subject" type="text" placeholder="Subject" />
          </div>
          <div className="input-control">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="6"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="btn-con">
            <Button
              name="Send Message"
              blob="blob"
              bg={theme.colorPrimary}
              color={theme.colorWhite}
              onclick={sendEmail}
              bFw={"600"}
              bRad={"30px"}
              bPad={theme.bPad1}
            />
          </div>
        </form>
      </div>
    </ContactStyled>
  );
};

const ContactStyled = styled(SectionLayout)`
  position: relative;
  .contact-info {
    display: flex;
    gap: 2rem;
    margin-top: 3rem;
    @media screen and (max-width: 973px) {
      flex-direction: column;
    }
    .form-section {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      .input-control {
        display: flex;
        gap: 1rem;
        input,
        textarea {
          width: 100%;
          padding: 1rem 1.5rem;
          border-radius: 30px;
          font-size: inherit;
          outline: none;
          border: none;
          font-family: inherit;
          resize: none;
        }
      }
    }
  }
`;

export default Contact;
