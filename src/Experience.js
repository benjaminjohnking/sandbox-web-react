import { getDisplayDate } from "./Utils";
import data from "./sandbox_data.json";

function Experience() {
  return(
    <div>
      <h1>Experience</h1>
      {data.experience.map((exp, i) => (
        <div key={i}>
          <h2>{exp.company}</h2>
          {exp.roles.map((role, j) => (
            <div key={j}>
              <h3>{role.title}</h3>
              <p>{getDisplayDate(role.startDate)} - {getDisplayDate(role.endDate)}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Experience;