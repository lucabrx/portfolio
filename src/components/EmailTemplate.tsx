import { FC } from "react";

//TODO - add email template (it is for me but still)
interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);