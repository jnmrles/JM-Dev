import emailjs from '@emailjs/browser';

const mail = ({ name, email, message }) => {
  return emailjs.send(
    'service_khmy8hn',
    'template_7p712wi',
    { name, email, message },
    'L8B9m_k-6n_-7QhDi'
  );
};

export default mail;
