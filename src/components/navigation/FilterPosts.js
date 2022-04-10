import React from "react";

export default function FilterPosts() {
  return (
    <div className="filter-header">
      <input type="radio" id="All" name="categories" value="All" checked />
      <input
        type="radio"
        id="Extracurricular"
        name="categories"
        value="Extracurricular"
      />
      <input type="radio" id="Job" name="categories" value="Job" />
      <input type="radio" id="Project" name="categories" value="Project" />

      <ol className="filtersType">
        <li>
          <label htmlFor="All">All</label>
        </li>
        <li>
          <label htmlFor="Extracurricular">Extracurricular</label>
        </li>
        <li>
          <label htmlFor="Job">Job</label>
        </li>
        <li>
          <label htmlFor="Project">Project</label>
        </li>
      </ol>
    </div>
  );
}
