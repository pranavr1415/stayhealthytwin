import Link from 'next/link';
import Image from 'next/image';

const Plancard = ({ title, image }) => {
  return (
    <Link href="/Plan" id="plan-card">
      <Image src={image} alt={title} width={410} height={300} className="poster" />
      <p className="title">{title}</p>
    </Link>
  );
};

export default Plancard;
