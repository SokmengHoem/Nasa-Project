
const API_URL = "http://localhost:8000/v1";

async function httpGetPlanets() {
  // TODO: Once API is ready.
  const res = await fetch(`${API_URL}/planets`);
  return await res.json();
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  const res = await fetch(`${API_URL}/launches`);
  const fetchedLaunches = await res.json();
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
  // Load launches, sort by flight number, and return as JSON.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  try{
    return await fetch(`${API_URL}/launches`, {
      method:"post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(launch),
    })
  }catch(err){
    return {
      ok: false,
    }
  }
}

async function httpAbortLaunch(id) {
 try{
  return await fetch(`${API_URL}/launches/${id}`, {
    method: "delete",
   })
 }catch(err){
  return {
    ok: false,
  };
 }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};