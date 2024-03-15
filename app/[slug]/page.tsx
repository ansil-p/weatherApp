import WeatherApp from "@/components/WeatherApp";
import { log } from "console";
import React from "react";

async function Page({ params }: { params: { slug: string } }) {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${params.slug}&limit=1&appid=${process.env.API_KEY}`);
  const loc = await response.json();
  console.log(loc);

  const lat = loc[0]?.lat.toString().slice(0, 5);
  const lon = loc[0]?.lon.toString().slice(0, 5);

  let data: any;

  try {
    const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${parseInt(lat)}&lon=${parseInt(lon)}&appid=${process.env.API_KEYS}`);
    data = await weatherResponse.json();
    console.log(data);
    // Further processing using temperature
  } catch (error) {
    console.error("Error fetching weather:", error);
  }

  return (
    <div className="bg-blue-300 h-full">
      <WeatherApp data={data} />
    </div>
  );
}

export default Page;
