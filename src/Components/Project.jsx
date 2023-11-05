import React from 'react'


// export const Project = (props) => {
//   return (
//     <div>Project</div>
//   )
// }


// export const Project= ({ projects }) => {
//   return (
//     <div className="project-list">
//       {projects.map(project => (
//         <div className="project-tile" key={project.id}>
//           <a href={project.link}>
//             <img src={project.image} alt={project.title} />
//           </a>
//           <h2>{project.title}</h2>
//           <p>
//             <a href={project.repo}>Repository</a>
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };



export const Project= ({ project }) => {
  return (
    <div className="project-list">
        <div className="project-tile" key={project.id}>
          <a href={project.link}>
            <img src={project.image} alt={project.title} width={400} height={200} />
          </a>
          <h2>{project.title}</h2>
          <p>
            <a href={project.repo}>Repository</a>
          </p>
        </div>
      )
    </div>
  );
};