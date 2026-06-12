import { supabase } from "@/shared/lib/supabase";


export default async function Home() {
  const { data, error } = await supabase.from("events").select("*");


  if (error) {
    console.log("data", data)
    console.log("error", error)
    return <div>Error: {error.message}</div>
  }
  return (
   <main>
    {data?.map((event) => (
      <div key={event.id}>
        <h2>
          {event.title}
        </h2>
        <p>
          {event.description}
        </p>

      </div>
    ))}
   </main>
  );
}
