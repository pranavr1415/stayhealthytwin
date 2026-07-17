import Link from 'next/link';
import Image from 'next/image';

const Plancard = ({ title, image }) => {
  return (
    <Link href="/Plan" id="plan-card">
      <Image src={image} alt={title} width={410} height={300} className="poster" />

      <div>
        <Image src="/icons/chef.svg" alt="Type" width={14} height={14} /> 
        <p>Type</p>
      </div>
      
      <p className="title">{title}</p>



      <div className="Calories">
        <div>
            <Image src="/icons/fire.svg" alt="Calories" width={14} height={14} />
            <p>Calories</p>
        </div>
      </div>
    </Link>
  );
};

export default Plancard;