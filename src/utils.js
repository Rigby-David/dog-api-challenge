async function getAllDogs() {
  const data = await fetch("https://dog.ceo/api/breeds/list/all");
  const res = await data.json();
  return res;
}

async function getRandomBreedImage(breed) {
  const data = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
  const res = await data.json();
  return res;
}

export { getAllDogs, getRandomBreedImage };
