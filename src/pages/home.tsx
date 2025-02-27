import { MultiPaymentOptions } from "../components/MultiPaymentOptions";
import SecurePayments from "../components/securePayments";
import Hero from "../components/home/Hero";
import PayrollSection from "./automated_payroll";
import RealTimeNotifications from "../components/home/RealTimeNotifications";

const Home = () => {
  return (
    <main>
      <Hero />
      <PayrollSection />
      <SecurePayments />
      <RealTimeNotifications />
      <MultiPaymentOptions />
    </main>
  );
};

export default Home;
