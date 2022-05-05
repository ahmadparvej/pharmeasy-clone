import React from 'react'
import { Bold, Box, Insidelink, Para } from './FooterMiddleStyles';

const FooterMiddle = () => {
  return (
    <Box>
      {/* <Bold>Top-Selling Healthcare Products: </Bold> */}
      <Bold style={{ fontSize: "18px" }}>
        Your One-Stop Online Pharmacy - PharmEasy
      </Bold>
      <Bold>We've got India Covered!</Bold>
      <Para>
        We now deliver in 1000+ cities and towns across 22000+ pin codes. We
        thereby cover every nook and corner of the country! The major cities in
        which we deliver include Mumbai, Kolkata, Delhi, Bengaluru, Ahmedabad,
        Hyderabad, Chennai, Thane, Howrah, Pune, Gurgaon, Navi Mumbai, Jaipur,
        Noida, Lucknow, Ghaziabad & Vadodara.
      </Para>
      <Bold>Say Goodbye to All Your Healthcare Worries With PharmEasy!</Bold>
      <Para>
        PharmEasy is here to help you take it easy! We are amongst one of
        India's top online pharmacy and medical care platforms. It enables you
        to order pharmaceutical and{" "}
        <Insidelink href="https://pharmeasy.in/health-care">
          healthcare products online
        </Insidelink>{" "}
        by connecting you to registered retail pharmacies and get them delivered
        to your home. We are an online medical store, making your purchase easy,
        simple, and affordable!
      </Para>
      <Bold>
        How Are We Making Lives Simpler With Our Online Medical Store?
      </Bold>
      <Para>
        Our doorstep delivery service is available in PAN-India across top
        cities like Bangalore, Delhi, Mumbai, Kolkata, Hyderabad, Gurgaon,
        Noida, Pune, etc. Our online medical store also allows you to choose
        from 1 lakh+ products incl. OTC products and medical equipment.
        PharmEasy is a one-stop online medical platform where you can also book
        <Insidelink href="https://pharmeasy.in/diagnostics">
          {" "}
          diagnostic tests
        </Insidelink>{" "}
        including blood tests, full-body checkups, and other preventive health
        check-ups at an affordable cost, right from the comfort of your home. We
        have partnered with trusted & certified labs that arrange for a sample
        pick-up from the convenience of your home. They also provide you with
        timely reports.
      </Para>
      <Bold>Why Are We The Most Preferred Online Pharmacy?</Bold>
      <Para>
        Lucrative offers on our platform allow you to make payment online and
        via various payment wallets at a discounted price. Alternatively, you
        can also choose to pay cash on delivery as we deliver the products at
        your doorstep. We cater to all your pharmaceutical needs and also make{" "}
        <Insidelink href="https://pharmeasy.in/online-medicine-order">
          ordering medicines online
        </Insidelink>{" "}
        a hassle-free experience for you. We connect you only with registered
        retail pharmacies & certified diagnostic labs. We ensure that healthcare
        is affordable to all and make the process of ordering online simple.
      </Para>
      <Bold>
        Sit Back & Relax While You Get Your Essentials Delivered Every Month!
      </Bold>
      <Para>
        It’s tough to remember to refill every month, especially in the case of
        chronic diseases. PharmEasy’s subscription service not only ensures that
        you are reminded of your refills but also makes sure that you are never
        out on your medical essentials. You will get a reminder every month and
        your order will be delivered at your convenience!
      </Para>
      <Bold>Access medical and health information:</Bold>
      <Para>
        PharmEasy delivers reliable and accurate medical information that has
        been carefully written, vetted and validated by our health experts. Our
        specialists curate high-quality and most reliable literature about
        medicines, illnesses, lab tests, Ayurvedic and over the counter health
        products.
      </Para>
      <Bold>We Believe in ‘Simplifying Healthcare, Impacting Lives!’</Bold>
    </Box>
  );
}

export default FooterMiddle
