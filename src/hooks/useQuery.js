const fetchData = async (d) => {
    // console.log(d);
  const response = await fetch(`https://pbsofficeinfosql.onrender.com/${d.queryKey}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};
export default fetchData;