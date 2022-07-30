import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Newsletter } from './Newsletter';

export const MailchimpForm = () => {
  const postUrl = `https://gmail.us9.list-manage.com/subscribe?u=abe7c04d9efeb2aa4f987245e&id=d177ac11e7`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  );
};
