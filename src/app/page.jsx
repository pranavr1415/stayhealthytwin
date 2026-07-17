import ExploreBtn from "../components/ExploreBtn";
import PlanCard from "../components/PlanCard";

const Plans = [
    {image : '/images/Plan1.png' , title : 'Plan 1'},
    {image : '/images/Plan2.png' , title : 'Plan 2'},
]

const page = () => {
  return (
      <section>
          <h1 className="text-center">Hub for all Gym Twins <br /> Stay fit!</h1>
          <p className="text-center mt-5">Welcome to the hub for all gym twins where you can be free.</p>
      
          <ExploreBtn />

          <div className="mt-10 space-y-7">
                <h3>Featured Plans</h3>

                <ul className="Plans">
                    {Plans.map((Plan) => (
                        <li key={Plan.title}>                           
                            <PlanCard {... Plan} />
                        </li>
                        
                    ))}
                </ul>


          </div>



      </section>
  )
}
export default page;