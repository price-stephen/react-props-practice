import React from "react";
import contacts from "./contacts"
import Card from "./Card"
import Avatar from "./Avatar";


function App() {


  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAWV4NeeZ1G6sDixlxUuj0gLyqd2geHref75nuUUMIP9wdgOOR0zPes_IrnSLV3A_vnYk&usqp=CAU"/>
      <Card name={contacts[0].name} img={contacts[0].imgURL} tel={contacts[0].phone} email={contacts[0].email} />
      <Card name={contacts[1].name} img={contacts[1].imgURL} tel={contacts[1].phone} email={contacts[1].email} />
      <Card name={contacts[2].name} img={contacts[2].imgURL} tel={contacts[2].phone} email={contacts[2].email} />
    </div>
  );
}

export default App;
