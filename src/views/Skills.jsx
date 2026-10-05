import { skills } from '../data.js';

export default function Skills() {
  return (
    <>
      <h2 className="welcome">Skills</h2>
      <table className="skills">
        <tbody>
          {skills.map((s) => (
            <tr key={s.group}>
              <th>{s.group}</th>
              <td>
                {s.items.map((i) => <span key={i} className="tag">{i}</span>)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
