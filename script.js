const recipes = [
    {
        id: 1,
        title: "Lemon Herb Pasta",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=900&q=80",
        description: "Bright, creamy, and packed with fresh flavor for an easy night in.",
        time: "20 min",
        servings: "2",
        ingredients: [
            "200g pasta",
            "2 tbsp olive oil",
            "2 garlic cloves",
            "1 lemon",
            "1/2 cup parmesan",
            "Fresh basil",
            "Black pepper"
        ],
        steps: [
            "Cook pasta until al dente and reserve a little pasta water.",
            "Sauté garlic in olive oil until fragrant.",
            "Add lemon zest, lemon juice, and a splash of warm pasta water.",
            "Toss pasta with parmesan and basil until glossy.",
            "Finish with pepper and serve immediately."
        ]
    },
    {
        id: 2,
        title: "Chocolate Chip Cookies",
        category: "dessert",
        image: "https://images.unsplash.com/photo-1499636136210-6d10c13b2e3b?auto=format&fit=crop&w=900&q=80",
        description: "Classic soft-baked cookies with a crisp edge and gooey center.",
        time: "25 min",
        servings: "12",
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
            "Cream butter and sugars until fluffy.",
            "Beat in eggs and vanilla.",
            "Add flour gradually and fold in chocolate chips.",
            "Scoop onto a lined baking tray.",
            "Bake at 180°C for 10–12 minutes and cool before serving."
        ]
    },
    {
        id: 3,
        title: "Greek Salad Bowl",
        category: "lunch",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80",
        description: "Crisp veggies, feta, olives, and a bright lemon dressing.",
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
            "Chop the vegetables into bite-sized pieces.",
            "Layer everything into a bowl.",
            "Whisk olive oil and lemon juice with salt and pepper.",
            "Dress the salad just before serving and top with feta."
        ]
    },
    {
        id: 4,
        title: "Fluffy Pancakes",
        category: "breakfast",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80",
        description: "Light, golden pancakes for slow mornings and sweet starts.",
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
            "Mix dry ingredients in one bowl.",
            "Whisk egg, milk, and butter in another.",
            "Combine until just mixed.",
            "Cook on a hot pan until bubbles form, then flip."
        ]
    },
    {
        id: 5,
        title: "Crispy Beef Tacos",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=900&q=80",
        description: "Loaded with savory beef, crunchy toppings, and bold flavor.",
        time: "30 min",
        servings: "4",
        ingredients: [
            "500g beef mince",
            "Taco seasoning",
            "8 tortillas",
            "Lettuce",
            "Tomato",
            "Cheese",
            "Salsa"
        ],
        steps: [
            "Brown the beef in a skillet.",
            "Add seasoning and a splash of water.",
            "Warm tortillas until soft and pliable.",
            "Fill with beef and toppings, then serve."
        ]
    },
    {
        id: 6,
        title: "Avocado Toast",
        category: "breakfast",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
        description: "Creamy avocado on crunch toast with bright, fresh toppings.",
        time: "5 min",
        servings: "1",
        ingredients: [
            "2 slices bread",
            "1 ripe avocado",
            "1 tsp lemon juice",
            "Salt and pepper",
            "Chili flakes"
        ],
        steps: [
            "Toast the bread until crisp.",
            "Mash avocado with lemon juice, salt, and pepper.",
            "Spread onto toast.",
            "Top with chili flakes and enjoy."
        ]
    }
];

const blogPosts = [
    {
        title: "The easiest way to make every dinner feel special",
        tag: "Kitchen tips",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
        excerpt: "A few small changes can turn a basic weeknight meal into a cozy table moment."
    },
    {
        title: "Weeknight dinners worth repeating",
        tag: "Meal planning",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
        excerpt: "Easy ideas for when you want a warm, satisfying meal without the stress."
    },
    {
        title: "Fresh ingredients, big flavor",
        tag: "Seasonal",
        image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=900&q=80",
        excerpt: "A simple guide to creating meals that feel bright, balanced, and beautiful."
    }
];

const galleryItems = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=900&q=80"
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

    applyTheme(getThemePreference());
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

    if (!recipesToShow.length) {
        recipeGrid.innerHTML = "<p class='empty-state'>No recipes matched your search.</p>";
        return;
    }

    recipesToShow.forEach((recipe) => {
        const card = document.createElement("article");
        card.className = "recipe-card";
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
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
                window.location.href = `recipe.html?id=${recipe.id}`;
                return;
            }
            window.location.href = `recipe.html?id=${recipe.id}`;
        });

        recipeGrid.appendChild(card);
    });
}

function renderBlogPosts() {
    const blogGrid = document.getElementById("blogGrid");
    if (!blogGrid) return;

    blogGrid.innerHTML = blogPosts.map((post) => `
        <article class="blog-card">
            <img src="${post.image}" alt="${post.title}" loading="lazy">
            <div class="blog-content">
                <span class="blog-tag">${post.tag}</span>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
            </div>
        </article>
    `).join("");
}

function renderGallery() {
    const galleryGrid = document.getElementById("galleryGrid");
    if (!galleryGrid) return;

    galleryGrid.innerHTML = galleryItems.map((item) => `
        <div class="gallery-item">
            <img src="${item}" alt="Whiskful food photography" loading="lazy">
        </div>
    `).join("");
}

function filterRecipes(category) {
    currentFilter = category;
    const filtered = category === "all"
        ? recipes
        : recipes.filter((recipe) => recipe.category === category);

    renderRecipes(filtered);
}

function searchRecipes(query) {
    const term = query.toLowerCase();
    const filtered = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term) ||
        recipe.description.toLowerCase().includes(term)
    );

    renderRecipes(filtered);
}

function setupHomePage() {
    setupThemeToggle();
    renderRecipes(recipes);
    renderBlogPosts();
    renderGallery();

    document.querySelectorAll(".filter-btn").forEach((button) => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
            filterRecipes(button.dataset.filter);
        });
    });

    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", (event) => {
            const value = event.target.value.trim();
            if (!value) {
                filterRecipes(currentFilter);
            } else {
                searchRecipes(value);
            }
        });
    }

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(contactForm);
            const name = formData.get("name");
            formMessage.textContent = `Thanks, ${name}! Your message is on its way.`;
            contactForm.reset();
        });
    }
}

function getRecipeById(id) {
    return recipes.find((recipe) => Number(recipe.id) === Number(id));
}

function renderRecipeDetail() {
    const detailContainer = document.getElementById("recipeDetail");
    if (!detailContainer) return;

    const recipeId = new URLSearchParams(window.location.search).get("id");
    const recipe = getRecipeById(recipeId);

    if (!recipe) {
        detailContainer.innerHTML = `
            <div class="page-shell">
                <article class="recipe-detail">
                    <div class="recipe-detail-hero">
                        <h1>Recipe not found</h1>
                    </div>
                    <div class="recipe-detail-body">
                        <p>We couldn't find the recipe you were looking for.</p>
                        <a class="back-link" href="index.html">← Back to all recipes</a>
                    </div>
                </article>
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
                                ${recipe.ingredients.map((item) => `<li>${item}</li>`).join("")}
                            </ul>
                        </div>
                        <div class="detail-panel">
                            <h3>Quick notes</h3>
                            <p>${recipe.description}</p>
                            <p style="margin-top: 1rem;">Perfect for a cozy evening, a casual brunch, or a dinner party with friends.</p>
                        </div>
                    </div>

                    <div class="detail-panel" style="margin-top: 1.5rem;">
                        <h3>Instructions</h3>
                        <ol>
                            ${recipe.steps.map((step) => `<li>${step}</li>`).join("")}
                        </ol>
                    </div>

                    <a class="back-link" href="index.html">← Back to all recipes</a>
                </div>
            </article>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("recipeGrid")) {
        setupHomePage();
    }

    if (document.getElementById("recipeDetail")) {
        renderRecipeDetail();
        setupThemeToggle();
    }

    if (document.getElementById("themeToggle") && !document.getElementById("recipeGrid")) {
        setupThemeToggle();
    }
});
