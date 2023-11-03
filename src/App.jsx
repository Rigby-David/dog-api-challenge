import { useEffect, useState } from "react";
import "./App.css";
import { getAllDogs, getRandomBreedImage } from "./utils";

function App() {
  const [dogResponse, setDogResponse] = useState([]);
  const [breedResponse, setBreedResponse] = useState([]);
  const [breedImage, setBreedImage] = useState("");
  console.log("breedImage", breedImage);

  async function handleGetAllDogs() {
    const { message } = await getAllDogs();
    setDogResponse(message);
  }

  async function handleGetRandomBreedImage(breed) {
    const data = await getRandomBreedImage(breed);
    setBreedResponse(data);

    const random = Math.floor(Math.random() * breedResponse.message.length);
    const randomImage = breedResponse.message[random];
    setBreedImage(randomImage);
  }

  useEffect(() => {
    handleGetAllDogs();
  }, []);

  return (
    <>
      <h1>Welcome to the Dog List</h1>
      <div className="app">
        <div className="image-container">
          <img src={breedImage} />
        </div>
        <section className="breed-list">
          <div className="list-container">
            {Object.entries(dogResponse).map((breed) => {
              return (
                <ul key={breed}>
                  <li onClick={() => handleGetRandomBreedImage(breed[0])}>
                    {breed[0]}
                  </li>
                </ul>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
