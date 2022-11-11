import { useState } from "react";
import { AddToList } from "./components/AddToList";
import { List } from "./components/List";

const apiKey: string | undefined = process.env.REACT_APP_MAP_API_KEY;
const mapID: string | undefined = process.env.REACT_APP_MAP_ID;


export interface IState {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
}

// const par: HTMLElement = document.getElementById('par') as HTMLElement
// par.innerHTML = '\n  Fugiat excepteur do tempor voluptate labore esse mollit eiusmod eu fugiat eu nostrud. Laboris cillum tempor sit incididunt ea occaecat qui. Reprehenderit voluptate adipisicing ut nulla est velit non minim elit cupidatat. Esse non consequat consequat Lorem ipsum esse nulla irure fugiat non deserunt mollit.\n  \n  Responsopilities:\n    Sunt laboris exercitation cillum dolor elit enim est id. Aute minim velit occaecat et magna duis nisi quis. Amet dolore laboris voluptate do nulla amet sunt quis cupidatat consectetur ipsum pariatur voluptate qui.\n  \nCompensation & Benefits:\n\t    Amet excepteur do et cillum eiusmod reprehenderit sint quis eu occaecat. Commodo ipsum excepteur aliquip adipisicing non minim est Lorem dolor. Ullamco officia sit occaecat culpa occaecat est occaecat qui est enim.\n\n'

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron",
      age: 23,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvVRglA8U6lY-CjyTjUBfXGmlSLR09zUAJ0oVcZMmUr8H0yOG55fQxGg&s",
      note: "Le Bron is a good player",
    },
  ]);
  console.log(process.env.REACT_APP_MAP_ID)

  return (
    <div>
      <h1>People</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
      <p id="par" className="whitespace-pre"></p>
      <div className="h-64 w-[400px] overflow-hidden rounded">
      <img src={`https://maps.googleapis.com/maps/api/staticmap?center=40.714%2c%20-74.998&zoom=12&size=400x300&key=${apiKey}&map_id=${mapID}`} />
      </div>
    </div>
  );
}

export default App;
