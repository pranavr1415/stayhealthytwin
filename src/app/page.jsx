import PlanCard from "../components/PlanCard";
import ExploreBtn from "../components/ExploreBtn";
import { plans } from "../lib/constant";

const page = () => {
  return (
    <section>
      <h1 className="text-center">Hub for all Gym Twins <br /> Stay fit!</h1>
      <p className="text-center mt-5">Welcome to the hub for all gym twins where you can be free.</p>

      <ExploreBtn />

      <div className="mt-10 space-y-7">
        <h3>Featured Plans</h3>

        <ul className="Plans">
          {plans.map((plan) => (
            <li key={plan.title}>
              <PlanCard {...plan} />
            </li>
          ))}
        </ul>

      </div>

    </section>
  )
}
export default page;