import data from "./sandbox_data.json";

function Home() {
  return(
    <div>
      <h1>About Me</h1>
      <p>{data.profile.statement}</p>
      {data.profile.links.map((link, i) => (
        <div key={i}>
          <a href={link.url}>{link.title}</a>
        </div>
      ))}
    </div>
  );
}

export default Home;