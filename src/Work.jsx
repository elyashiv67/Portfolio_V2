const projects = [
  {
    num: "01",
    title: "Zit Web",
    desc: "Page with dvr to real time calculator",
    tags: ["React" , "css" , "javascript"],
    link: "https://elyashiv67.github.io/zit-web/",
    gitLink: "https://github.com/elyashiv67/zit-web"
  },
  {
    num: "02",
    title: "to do list ",
    desc: "to do list project with backend in node js and frontend in html",
    tags: ["node.js" , "html" , "css" , "javascript", "Sql"],
    link: "#",
    gitLink: "https://github.com/elyashiv67/toDoList-2"
  },
  {
    num: "03",
    title: "iot with web",
    desc: "an arduino card that has wifi and a website to control leds , and a light sensor that shows precentage of light in the room",
    tags: ["C++" , "Html", "Css", "Javascript"],
    link: "#",
    gitLink: "https://github.com/elyashiv67/iot_with_website"
  },
  {
    num: "04",
    title: "esp escape room",
    desc: "a little esp project that has 2 boards one acting as a server and one as a client",
    tags: ["c++"],
    link: "#",
    gitLink: "https://github.com/elyashiv67/esp_escape_room"
  }
];

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="section-label">Selected Work</div>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.num} className="project-card fade-in">
            <div className="project-num">{p.num}</div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span key={t} className="project-tag">{t}</span>
              ))}
            </div>
            {p.link !== "#" && (
                <a href={p.link} className="project-link" target={"_blank"}>View Project →</a>
            )}
            {p.gitLink !== "#" && (
                <a href={p.gitLink} className="project-link" target={"_blank"}>View Github Repository →</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
