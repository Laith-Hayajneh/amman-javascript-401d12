import { useState, useEffect } from "react";

function People(props) {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    name && setPeople([...people, name]);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  // 1- on EVERY re-render of this component
  useEffect(() => {
    console.log("I RUN ON EVERY RE-RENDER");
  });

  // 2- This runs only when the name changes
  useEffect(() => {
    console.log("NAME CHANGED TO", name);
    document.title = name;
  }, [name]);

  // 3- This runs only once on the initial rendering
  // (this could be a good use case for doing a GET from an API to pre-load
  // the data)
  useEffect(() => {
    console.log("I RUN ONLY ON INITIAL MOUNT");
  }, []);

  // 4- this runs only when the form is submitted (name added)
  // we can use this for post and put requests (api)
  useEffect(() => {
    console.log("I RUN ON PERSON ADDED");
    if (people.length >= 1) {
      document.title = name;
    }
  }, [people]);


//   useEffect(() => {
//     return () => {
//         //the unmount will only be called when the user.id is changed
//     }
//   }, [user.id]);

/*
  user
    id = null
    name
    email
    password
*/

  //   useEffect(() => {
  //     console.log("I RUN ON PERSON ADDED");
  //     if (people.length >= 1) {
  //       document.title = name;
  //     }
  //   }, [people, name]);

  // 5- this effect has a cleanup job (componentDidUnmount)
  // this could be in of the above cases
  // will do it in isolation for the demo
  useEffect(() => {
    //   askldjfalskd;fj
    return () => {
      console.log("I RUN WHEN COMPONENT UNMOUNTED");
    };
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onNameChange} />
      </form>
      {people.map((person) => (
        <p key={person}>{person}</p>
      ))}
    </div>
  );
}

export default People;
