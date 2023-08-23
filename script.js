const character = document.getElementById("character");
const plantButton = document.getElementById("plantButton");
let hasPlantedSeed = false;
console.log('character')
console.log('plantButton')
plantButton.addEventListener("click", () => {
  if (!hasPlantedSeed) {
    const tree = document.createElement("div");
    tree.className = "grown-tree";
    character.parentNode.appendChild(tree);
    hasPlantedSeed = true;

    setTimeout(() => {
      tree.remove();
      hasPlantedSeed = false;
      alert("수확되었습니다!");
    }, 5000);
  }
});
console.log(hasPlantedSeed)
