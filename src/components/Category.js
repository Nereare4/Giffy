import React from "react";
import { Link } from 'wouter'
import './styles/Category.css'

export default function Category({ name, options = [] }) {
  return (
    <section>
      <h3 className="CategoryTitle">{name}</h3>
      <ul className="CategoryList">
        {options.map((singleOption, index) => (
          <li className="CategoryListItem"
              key={singleOption}
              index={index}
              type='primary'
          >
            <Link className="CategoryLink" to={`/search/${singleOption}`}>
              {singleOption}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
