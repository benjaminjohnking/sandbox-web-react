import { getDisplayDate } from "./Utils";
import data from "./sandbox_data.json";

function Education() {
  return(
    <div>
      <h1>Education</h1>
      {data.education.map((edu, i) => (
        <div key={i}>
          <h2>{edu.degree}, {edu.program}</h2>
          <p>{edu.school}</p>
          <p>{getDisplayDate(edu.startDate)} - {getDisplayDate(edu.endDate)}</p>
          <p>{edu.gpa}</p>
        </div>
      ))}
    </div>
  );
}

export default Education;