import dynamic from 'next/dynamic';
import HeartBeats from '@/components/layout/navbar/HeartBeats'; // Assuming HeartBeats component is in this path

// Dynamically import ContactUsPage component with a loading fallback
const ContactUsPage = dynamic(() => import('@/components/layout/contactus-page/ContactUs'), {
  loading: () => <HeartBeats />, 
});

export const metadata = {
  title:"Contact us",
  description:"Contact Joey Med for telehealth services and online pharmacy needs. Get in touch with our team in Tampa, Florida."
}

const ContactUs = () => {
  return (
    <>
      <ContactUsPage />
    </>
  );
};

export default ContactUs;
