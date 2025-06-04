// Alert when page loads
window.onload = function () {
    alert("Welcome to the Admin Dashboard!");
  };
  
  // Variables
  let adminName = "Sanzhar"; // string
  let petCount = 0;          // number
  let isAdmin = true;        // boolean
  const addSound = document.getElementById("addSound");

  // Function without parameter
  function greetAdmin() {
    console.log("Hello, " + adminName + "! Total pets: " + petCount);
  }
  
  // Event listener for alert button
  document.getElementById("alertBtn").addEventListener("click", () => {
    alert("Button clicked by " + adminName);
  });
  
  // Add pet form logic
  const petForm = document.getElementById("petForm");
  const petList = document.getElementById("petList");
  
  // Load pets from localStorage or initialize
  let pets = JSON.parse(localStorage.getItem("pets")) || [];

  function savePetsToLocalStorage() {
    localStorage.setItem("pets", JSON.stringify(pets));
  }

  function renderPets() {
    petList.innerHTML = "";
    pets.forEach((pet) => {
      let li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = `${pet.name} ${pet.type} ${pet.age}`;
      petList.appendChild(li);
    });
  }

  renderPets(); // render stored pets on load

  petForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("petName").value;
    let age = parseInt(document.getElementById("petAge").value);
    let type = document.getElementById("petType").value;

    if (age > 10) {
      alert(name + " is a senior " + type);
    } else {
      alert(name + " is a young " + type);
    }

    pets.push({ name, age, type });
    petCount++;
    greetAdmin();

    savePetsToLocalStorage();
    renderPets();
    petForm.reset();
  });

  
  // Render pets using loop
  function renderPets() {
    petList.innerHTML = "";
    for (let i = 0; i < pets.length; i++) {
      let li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = `${pets[i].name} ${pets[i].type} ${pets[i].age}`;
      petList.appendChild(li);
    }
  }
  
  // Random number generation
  document.getElementById("generateCodeBtn").addEventListener("click", () => {
    let code = Math.floor(Math.random() * 10000);
    document.getElementById("codeDisplay").textContent = "Generated Code: PET" + code;
  });

  // Feature 1: Random Number with Conditions
document.getElementById("randomCheckBtn").addEventListener("click", () => {
    let num = Math.floor(Math.random() * 100) + 1;
    let result = `Generated number: ${num} — It is `;
  
    result += num % 2 === 0 ? "Even" : "Odd";
    result += " and ";
    result += num > 50 ? "greater than 50." : "less than or equal to 50.";
  
    document.getElementById("randomOutput").textContent = result;
  });
  
  // Feature 2: Comparators and Logical Operators
  document.getElementById("compareBtn").addEventListener("click", () => {
    const val1 = parseInt(document.getElementById("compareAge1").value);
    const val2 = parseInt(document.getElementById("compareAge2").value);
    let message = "";
  
    if (isNaN(val1) || isNaN(val2)) {
      message = "Please enter valid numbers for both fields.";
    } else if (val1 === val2) {
      message = `Both pets are the same age: ${val1}`;
    } else if (val1 > val2 && val1 >= 10) {
      message = `Pet 1 is older (${val1}) and also considered senior.`;
    } else if (val2 > val1 || val2 >= 10) {
      message = `Pet 2 is older (${val2}) or senior.`;
    }
  
    document.getElementById("compareResult").textContent = message;
  });
  
  // Feature 3: Dynamic Breed List (Array + DOM)
  let breeds = JSON.parse(localStorage.getItem("breeds")) || ["Golden Retriever", "Bulldog", "Persian Cat"];

  function saveBreedsToLocalStorage() {
    localStorage.setItem("breeds", JSON.stringify(breeds));
  }

  function updateBreedList() {
    const list = document.getElementById("breedList");
    list.innerHTML = "";
  
    breeds.forEach((breed, index) => {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
  
      const span = document.createElement("span");
      span.textContent = breed;
      span.id = `breedText-${index}`;
  
      const btnGroup = document.createElement("div");
  
      // Edit Button
      const editBtn = document.createElement("button");
      editBtn.className = "btn btn-sm btn-outline-secondary me-2";
      editBtn.textContent = "Edit";
      editBtn.onclick = () => enableEdit(index);
  
      // Delete Button
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "btn btn-sm btn-outline-danger";
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = () => {
        breeds.splice(index, 1);
        saveBreedsToLocalStorage();
        updateBreedList();
      };
  
      btnGroup.appendChild(editBtn);
      btnGroup.appendChild(deleteBtn);
      li.appendChild(span);
      li.appendChild(btnGroup);
  
      list.appendChild(li);
    });
  }

    function enableEdit(index) {
      const list = document.getElementById("breedList");
      const li = list.children[index];
      const currentName = breeds[index];
    
      const input = document.createElement("input");
      input.type = "text";
      input.className = "form-control";
      input.value = currentName;
    
      const saveBtn = document.createElement("button");
      saveBtn.className = "btn btn-sm btn-success mt-2";
      saveBtn.textContent = "Save";
      saveBtn.onclick = () => {
        const newName = input.value.trim();
        if (newName) {
          breeds[index] = newName;
          saveBreedsToLocalStorage();
          updateBreedList();
        }
      };
    
      // Clear and rebuild item
      li.innerHTML = "";
      li.appendChild(input);
      li.appendChild(saveBtn);
    }

    document.getElementById("addBreedBtn").addEventListener("click", () => {
    const input = document.getElementById("newBreed");
    const newBreed = input.value.trim();
    if (newBreed) {
      breeds.push(newBreed);
      saveBreedsToLocalStorage();
      updateBreedList();
      input.value = "";
      addSound.play(); // <-- Play sound on add
    }
  });

  updateBreedList(); // Initialize on page load


  // Feature 4: Loop-generated Cards with Styles
  const petPreview = document.getElementById("petPreview");
  const sampleNames = ["Max", "Bella", "Luna", "Charlie", "Lucy", "Rocky", "Milo", "Chloe", "Simba", "Daisy"];
  const colors = ["primary", "success", "warning", "danger", "info"];
  
  for (let i = 0; i < 10; i++) {
    const col = document.createElement("div");
    col.className = "col";
  
    const card = document.createElement("div");
    card.className = `card border-${colors[i % colors.length]} h-100`;
  
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
  
    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = sampleNames[i];
  
    const text = document.createElement("p");
    text.className = "card-text";
    text.textContent = "This pet is looking for a loving home.";
  
    cardBody.appendChild(title);
    cardBody.appendChild(text);
    card.appendChild(cardBody);
    col.appendChild(card);
    petPreview.appendChild(col);
  }
  
  
  