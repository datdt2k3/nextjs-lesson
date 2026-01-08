import Link from "next/link";

const ServicePage = () => {
  return (
    <>
      <div>ServicePage</div>
      <p>All of services</p>
      <ul>
        <li>
          <Link href="service/web_dev">Web Development</Link>
        </li>
        <li>
          <Link href="service/mobile_dev">Mobile App Development</Link>
        </li>
      </ul>
      <Link href="/">Home</Link>
    </>
  );
};

export default ServicePage;
