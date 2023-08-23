import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [slectedCourses, setSelectedCourses] = useState(null);
  const courses = [
    {
      id: 1,
      name: 'HTML',
    },
    {
      id: 2,
      name: 'CSS',
    },
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedCourses((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (slectedCourses) {
      console.log(slectedCourses);
    }
  }, [slectedCourses]);
  return (
    <div>
      {courses.map((el) => (
        <div>
          <p>{el.name}</p>
          <input
            type="radio"
            name={el.name}
            value="yes"
            onChange={handleChange}
          />
          Yes
          <input
            type="radio"
            name={el.name}
            value="no"
            onChange={handleChange}
          />
          No
        </div>
      ))}
    </div>
  );
}
