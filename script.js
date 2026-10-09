// Sample recipes data
const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        category: "dinner",
        emoji: "🍝",
        description: "Traditional Italian pasta with eggs, cheese, and pancetta",
        time: "20 min",
        servings: "4"
    },
    {
        id: 2,
        title: "Chocolate Chip Cookies",
        category: "dessert",
        emoji: "🍪",
        description: "Soft and chewy cookies loaded with chocolate chips",
        time: "25 min",
        servings: "24"
    },
    {
        id: 3,
        title: "Greek Salad",
        category: "lunch",
        emoji: "🥗",
        description: "Fresh vegetables with feta cheese and olive oil dressing",
        time: "10 min",
        servings: "2"
    },
    {
        id: 4,
        title: "Fluffy Pancakes",
        category: "breakfast",
        emoji: "🥞",
        description: "Light and airy pancakes perfect for breakfast",
        time: "15 min",
        servings: "4"
    },
    {
        id: 5,
        title: "Beef Tacos",
        category: "dinner",
        emoji: "🌮",
        description: "Seasoned ground beef with fresh toppings and warm tortillas",
        time: "30 min",
        servings: "4"
    },
    {
        id: 6,
        title: "Avocado Toast",
        category: "breakfast",
        emoji: "🥑",
        description: "Creamy avocado spread on toasted bread with fresh toppings",
        time: "5 min",
        servings: "1"
    }
];

let currentFilter = "all";

// Initialize the app
document.addEventListener("DOMContentLoaded", function() {
    renderRecipes(recipes);
    setupEventListeners();
});

// Render recipe cards
function renderRecipes(recipesToShow) {
    const recipeGrid = document.getElementById("recipeGrid");
    recipeGrid.innerHTML = "";

    if (recipesToShow.length === 0) {
        recipeGrid.innerHTML = "<p style='grid-column: 1/-1; text-align: center; color: #999;'>No recipes found</p>";
        return;
    }

    recipesToShow.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
            <div class="recipe-image">${recipe.emoji}</div>
            <div class="recipe-content">
                <span class="recipe-category">${recipe.category}</span>
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.time}</span>
                    <span>👥 ${recipe.servings}</span>
                </div>
            </div>
        `;
        recipeGrid.appendChild(card);
    });
}

// Filter recipes by category
function filterRecipes(category) {
    currentFilter = category;
    
    if (category === "all") {
        renderRecipes(recipes);
    } else {
        const filtered = recipes.filter(recipe => recipe.category === category);
        renderRecipes(filtered);
    }
}

// Search recipes
function searchRecipes(query) {
    const searchTerm = query.toLowerCase();
    const filtered = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm)
    );
    
    renderRecipes(filtered);
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            filterBtns.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            const filter = this.getAttribute("data-filter");
            filterRecipes(filter);
        });
    });

    // Search input
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", function() {
        if (this.value.length > 0) {
            searchRecipes(this.value);
        } else {
            filterRecipes(currentFilter);
        }
    });

    // Recipe card clicks
    const recipeGrid = document.getElementById("recipeGrid");
    recipeGrid.addEventListener("click", function(e) {
        const card = e.target.closest(".recipe-card");
        if (card) {
            const title = card.querySelector(".recipe-title").textContent;
            alert(`You selected: ${title}\n\nAdd more details and instructions in the recipe page!`);
        }
    });
}
