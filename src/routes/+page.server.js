export async function load() {
 


  const grrrData = await fetch("https://fdnd-toc-api.netlify.app/total");
  const dataApi = await grrrData.json();


  

  return { dataApi };
}