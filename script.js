const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        category: "dinner",
        emoji: "🍝",
        description: "Traditional Italian pasta with eggs, cheese, and pancetta.",
        time: "20 min",
        servings: "4",
        ingredients: [
            "200g spaghetti",
            "100g pancetta or bacon",
            "2 eggs",
            "1/2 cup grated parmesan",
            "Black pepper",
            "Salt"
        ],
        steps: [
            "Boil the spaghetti in salted water until al dente.",
            "Cook the pancetta in a skillet until crispy.",
            "Whisk the eggs and parmesan together in a bowl.",
            "Toss hot pasta with pancetta, then remove from heat and mix in egg mixture.",
            "Season with black pepper and serve immediately."
        ]
    },
    {
        id: 2,
        title: "Chocolate Chip Cookies",
        category: "dessert",
        emoji: "🍪",
        description: "Soft and chewy cookies loaded with chocolate chips.",
        time: "25 min",
        servings: "24",
        ingredients: [
            "2 cups flour",
            "1 cup butter",
            "3/4 cup brown sugar",
            "1/2 cup white sugar",
            "2 eggs",
            "1 tsp vanilla",
            "1 cup chocolate chips"
        ],
        steps: [
            "Cream butter and sugars together until fluffy.",
            "Beat in the eggs and vanilla.",
            "Add flour gradually and fold in chocolate chips.",
            "Scoop onto a baking tray and bake at 180°C for 10–12 minutes.",
            "Cool before serving."
        ]
    },
    {
        id: 3,
        title: "Greek Salad",
        category: "lunch",
        emoji: "🥗",
        description: "Fresh vegetables with feta cheese and olive oil dressing.",
        time: "10 min",
        servings: "2",
        ingredients: [
            "Tomatoes",
            "Cucumber",
            "Red onion",
            "Feta",
            "Olives",
            "Olive oil",
            "Lemon juice"
        ],
        steps: [
            "Chop the vegetables into bite-size pieces.",
            "Add olives and feta on top.",
            "Whisk olive oil and lemon juice with salt and pepper.",
            "Pour dressing over the salad and toss gently."
        ]
    },
    {
        id: 4,
        title: "Fluffy Pancakes",
        category: "breakfast",
        emoji: "🥞",
        description: "Light and airy pancakes perfect for breakfast.",
        time: "15 min",
        servings: "4",
        ingredients: [
            "1 cup flour",
            "2 tbsp sugar",
            "1 tbsp baking powder",
            "1 egg",
            "3/4 cup milk",
            "2 tbsp melted butter"
        ],
        steps: [
            "Mix the dry ingredients in one bowl.",
            "Whisk egg, milk, and butter in another bowl.",
            "Combine wet and dry ingredients until just mixed.",
            "Cook on a hot pan until bubbles form, then flip and cook through."
        ]
    },
    {
        id: 5,
        title: "Beef Tacos",
        category: "dinner",
        emoji: "🌮",
        description: "Seasoned ground beef with fresh toppings and warm tortillas.",
        time: "30 min",
        servings: "4",
        ingredients: [
            "500g ground beef",
            "1 taco seasoning packet",
            "8 taco shells",
            "Lettuce",
            "Tomato",
            "Cheese",
            "Salsa"
        ],
        steps: [
            "Cook the beef in a frying pan until browned.",
            "Add taco seasoning and a splash of water.",
            "Warm tortillas and fill with beef.",
            "Top with lettuce, tomato, cheese, and salsa."
        ]
    },
    {
        id: 6,
        title: "Avocado Toast",
        category: "breakfast",
        emoji: "🥑",
        description: "Creamy avocado spread on toasted bread with fresh toppings.",
        time: "5 min",
        servings: "1",
        ingredients: [
            "2 slices bread",
            "1 ripe avocado",
            "1 tsp lemon juice",
            "Salt and pepper",
            "Chili flakes",
            "Optional: tomato or egg"
        ],
        steps: [
            "Toast the bread until crisp.",
            "Mash avocado with lemon juice, salt, and pepper.",
            "Spread over toast and top with chili flakes.",
            "Add extra toppings if desired and serve."
        ]
    }
];

let currentFilter = "all";

function getThemePreference() {
    return localStorage.getItem("whiskful-theme") || "light";
}

function applyTheme(theme) {
    const isDark = theme === "dark";
    document.body.classList.toggle("dark-mode", isDark);
    const toggle = document.getElementById("themeToggle");
    if (toggle) {
        toggle.textContent = isDark ? "☀️" : "🌙";
    }
}

function setupThemeToggle() {
    const toggle = document.getElementById("themeToggle");
    if (!toggle) return;

    const preferred = getThemePreference();
    applyTheme(preferred);

    toggle.addEventListener("click", () => {
        const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
        localStorage.setItem("whiskful-theme", nextTheme);
        applyTheme(nextTheme);
    });
}

function renderRecipes(recipesToShow) {
    const recipeGrid = document.getElementById("recipeGrid");
    if (!recipeGrid) return;

    recipeGrid.innerHTML = "";

    if (recipesToShow.length === 0) {
        recipeGrid.innerHTML = "<p style='grid-column: 1/-1; text-align: center; color: var(--muted);'>No recipes found</p>";
        return;
    }

    recipesToShow.forEach(recipe => {
        const card = document.createElement("article");
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
                <div class="recipe-footer">
                    <button class="view-btn" data-id="${recipe.id}">View recipe</button>
                </div>
            </div>
        `;

        card.addEventListener("click", (event) => {
            if (event.target.closest(".view-btn")) {
                const id = event.target.getAttribute("data-id");
                window.location.href = `recipe.html?id=${id}`;
                return;
            }
            const id = recipe.id;
            window.location.href = `recipe.html?id=${id}`;
        });

        recipeGrid.appendChild(card);
    });
}

function filterRecipes(category) {
    currentFilter = category;
    const filtered = category === "all" ? recipes : recipes.filter(recipe => recipe.category === category);
    renderRecipes(filtered);
}

function searchRecipes(query) {
    const term = query.toLowerCase();
    const filtered = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term) ||
        recipe.description.toLowerCase().includes(term)
    );
    renderRecipes(filtered);
}

function setupHomePage() {
    setupThemeToggle();
    renderRecipes(recipes);

    document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            filterRecipes(button.dataset.filter);
        });
    });

    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", (event) => {
            if (event.target.value.trim() === "") {
                filterRecipes(currentFilter);
            } else {
                searchRecipes(event.target.value);
            }
        });
    }
}

function getRecipeById(id) {
    return recipes.find(recipe => Number(recipe.id) === Number(id));
}

function renderRecipeDetail() {
    const detailContainer = document.getElementById("recipeDetail");
    if (!detailContainer) return;

    const params = new URLSearchParams(window.location.search);
    const recipeId = params.get("id");
    const recipe = getRecipeById(recipeId);

    if (!recipe) {
        detailContainer.innerHTML = `
            <div class="page-shell">
                <div class="recipe-detail">
                    <div class="recipe-detail-hero">
                        <h1>Recipe not found</h1>
                    </div>
                    <div class="recipe-detail-body">
                        <p>We couldn't find that recipe. Try going back to explore more dishes.</p>
                        <a href="index.html" class="back-link">← Back to recipes</a>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    detailContainer.innerHTML = `
        <div class="page-shell">
            <article class="recipe-detail">
                <div class="recipe-detail-hero">
                    <span class="recipe-category">${recipe.category}</span>
                    <h1>${recipe.title}</h1>
                    <div class="detail-meta">
                        <span>⏱️ ${recipe.time}</span>
                        <span>👥 ${recipe.servings}</span>
                    </div>
                </div>
                <div class="recipe-detail-body">
                    <div class="detail-grid">
                        <div class="detail-panel">
                            <h3>Ingredients</h3>
                            <ul>
                                ${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}
                            </ul>
                        </div>
                        <div class="detail-panel">
                            <h3>Quick Notes</h3>
                            <p>${recipe.description}</p>
                            <p style="margin-top: 1rem; color: var(--muted);">Perfect for a cozy meal or a fun weekend cook session.</p>
                        </div>
                    </div>
                    <div class="detail-panel" style="margin-top: 1.5rem;">
                        <h3>Instructions</h3>
                        <ol>
                            ${recipe.steps.map(step => `<li>${step}</li>`).join("")}
                        </ol>
                    </div>
                    <a class="back-link" href="index.html">← Back to all recipes</a>
                </div>
            </article>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    setupThemeToggle();

    if (document.getElementById("recipeGrid")) {
        setupHomePage();
    }

    if (document.getElementById("recipeDetail")) {
        renderRecipeDetail();
    }
});
