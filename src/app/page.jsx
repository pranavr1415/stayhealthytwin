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

import React from "react";

type User = {
  id : Number;
  name : String;
  username : String;
  email : String;
  company: {
    name : String;
  };
};

async function getUsers(): Promise<User[]>{
  const res = await fetch ("htps://jsonplaceholder.typicode.com/users",{
    next:{
      revalidate:300,
    },
  });

  if(!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}

function StatsCard({
  title,
  value,
  color,
}:{
  title: String;
  value: string | Number;
  color: string
}}){
  return (
    <div className={'rounded-xl p-6 shadow-Ig text-white ${color} transition hover:scale-105'}>
      <h3 className="text-sm opacity-80">{title}</h3>
      <h2 className="text-4xl font-bold mt-2">{value}</h2>
    </div>
  );
}

function UserCard({user}:{user:User}) {
  return (
    <div className="rounded-Ig border p-5 hover:shadow-xl transition">
      <div className="flex justify-between">
      </div>
        <h2 className="font-bold-text-xl">{user.name}</h2>
        <p className="text-gray-500">@{user.username}</p>
    </div>

      <div className="h-12 w-12 rounded full bg-blue-600 text-while flex items-centerjustify-center font-bold">
        {user.name.charAt{0}}
      </div>
      </div>

      <divclassName="mt-5 space-y-2 text-sm">
      <p>
        <span className="font-semibold">Email:</span>{""}
        {user.email}
      </p>

      <p>
        <span className = "font-semibold">Company: </span>
        {user.company.name}
      </p>
      </div>

      <button className="mt-5 rounded-Ig-bg-blue-600 text-white px-5 py-2 hover:bg-blue-700">
        View Profile
      </button>
      </div>
  );
} 

function Pagination9{
  getCurrentRouteCacheVersion,
  total,
}:{
  current: Number;
  total: Number;
}){
  return ( <div className="flex gap-2 mt-8 justify-center">
    {Array.from({length: total})}.map(_, i) => (
      <button key={i} className={'h-10 w-10 rounded ${
      current === i + 1
      ? "bg=blue-600 text-white"
      :"bg-gray-200"
    )'}
    >
      {i+1
        </button>
      ))}
  </div>
    );
  }

  export default async function Dashboard({
    searchParams,
  }:{
    searchParams?:Promise<{
      page? : String;
      search?: String;
      sort? : String;
    }>;
  }){
    const users =await getUsers();
    const params = (await search{arams}) || {};

    const page = Number(params.page || 1);
    const search = params.search || "";
    const sort = params.sort || "asc";

  let filtered = users.filter((user)) =>
    user.name.toLowerCase().includes(search.toLowerCase())
);
  filtered = filteresd.sort((a,b) => {
    if (sort === "asc") {
      return a.name.localecompare(b.name);
    }
      return b.name.localeCompare(a.name);
  });

  const pageSize = 4;

  const pages = Math.ceil(filtered.length / pageSize);

  const currentUsers = filtered.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-whote shadow">
        <div className="mx-auto max-w-7xl p-6">
          <h1 className="text-4xl font-bold">
            Next.js Dashboard
          </h1>

          <p classnMe="text-gray-500 mt-2">
            Example dashboard with searching,
            pagination, sorting and reusable 
            components.
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto p-6">

        <div className ="grid md:grid-cols-4 gap-5">

          <StatsCard
           title="Users"
           value={users.length}
           color="bg-blue-600"
           />

           <StatsCard
            title="Filtered"
            value={filtered.length}
            color="bg-green-600"
            />

            <StatsCard
             title="Current Page"
             value={page}
             color="bg-purple-600"
             />

             <StatsCard
              title="Pages"
              value={Pages}
              color="bg-orange-500"
              />

              </div>


              <form className="mt-8 flex flex-col md:flex-row gap-4">


                <input 
                type="text"
                name ="search
                defaultValue=(search)
                placeHolder="search user"
                className="botder rounded-ig p-3"
                >

                  <select
                  name="sort"
                  defaultValue={sort}
                  className="border rounded-ig p-3"
              >

                <option value="asc">
                  name ascending
                </option>

                <option value="desc">
                  Name descending
                </option>
              </select>
              
              <button className="ng-nlue-600 text-white px-6 rounded-ig"
                type="submit"
                >
                  Apply
                </button>

                </form>

                <div className="grod mid:grid-cols-22 IG:grid-cols-3 gap-6 mt-10">
                  {currentUsers.map((user)==>(
                    <usercard key={user.id}
                    user={user}
                    />
                  ))}
                </div>



                <Pagination
                current={page}
                total={pages}
                />

                </section>
              
              <footer className="mt-16 bg-white-border-t">
                <div classname="max-w-7xl mx-auto p-6 text-center text-gray-500">
                  Built with Next.js app router, typescript,
                  React server components, tailwind css and incremental
                  static regeneration.
                </div>
              </footer>
    </main>
  );
)


import { NextResponse } from "next/server";
import { products } from "../app/api/Plans"

export async function GET(request) {
  const { searchParams} = newURL(request.url);

  const search = searchParams.get("search") ?? "";
  const sort = searchParams.get("sort") ?? "title";
  const page = Number(searchParams.get("page")) 
}














































