import './About.css'

const skills = ["C#", "JavaScript", "React", "Node.js", "SQL", "Git", "Arduino", "C++", "Html", "Css" ];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-label">About</div>
      <div className="about-grid">
        <h2 className="about-heading fade-in">
          Developer.<br />Designer.<br />Problem solver.
        </h2>
        <div className="about-body fade-in">
          <p>
            I'm a software developer with a curios mind and a desire to keep learning .
          </p>
          <p>
            I live in the north in moshav menahamia, and im open for relocation if needed.
          </p>
          <p>
            By day i am a police officer in the cyber division, stationd in afula police station, and by night (im batman jk) learning practical software engineering in kinneret.
          </p>
          <p>
            With 2 years of experience, my experience is from college and personal project, im highly motivated to start my coding career in your company.
          </p>
          <p>
            I also have a degree in practical industrial engineering, from hispin collage before i joined the army.
          </p>
          <p>
            When I'm not coding, you'll find me on my enduro bike riding through canyons or up in the mountains.
          </p>
          <div className="skills-list">
            {skills.map((s) => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
