// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Workout plans data dictionary
const workoutData = {
    beginner: [
        { title: "Full Body Foundation", desc: "Build basic strength and stability across major muscle groups with guided foundational movements.", sets: "3 Sets x 12 Reps", icon: "fa-person-walking" },
        { title: "Core & Stability", desc: "Strengthen abdominals, lower back, and obliques to improve posture and prevent injuries.", sets: "3 Sets x 45 Sec", icon: "fa-shield-heart" },
        { title: "Introductory Cardio", desc: "Low-impact steady-state treadmill & elliptical circuits to enhance cardiovascular endurance.", sets: "25 Mins Session", icon: "fa-heart-pulse" }
    ],
    intermediate: [
        { title: "Upper/Lower Split", desc: "Dedicated high-volume days focusing on compound lifts combined with targeted accessory movements.", sets: "4 Sets x 10 Reps", icon: "fa-dumbbell" },
        { title: "Functional HIIT", desc: "High-intensity interval training utilizing kettlebells, battle ropes, and explosive bodyweight drills.", sets: "40 Min Circuit", icon: "fa-bolt" },
        { title: "Hypertrophy Chest & Back", desc: "Targeted muscle growth program designed to maximize muscle fiber recruitment and thickness.", sets: "4 Sets x 8-12 Reps", icon: "fa-fire" }
    ],
    advanced: [
        { title: "Powerlifting Peak", desc: "Advanced progressive overload block focused on heavy squat, bench press, and deadlift numbers.", sets: "5 Sets x 3-5 Reps", icon: "fa-weight-hanging" },
        { title: "Athletic Conditioning", desc: "Explosive plyometrics, agility ladders, and speed work tailored for competitive athletes.", sets: "60 Min Session", icon: "fa-bolt-lightning" },
        { title: "Pro Bodybuilding Split", desc: "Push-Pull-Legs elite split featuring drop sets, supersets, and failure training.", sets: "5 Sets x 12 Reps", icon: "fa-trophy" }
    ]
};

function switchWorkout(level) {
    // Update button styles
    ['beginner', 'intermediate', 'advanced'].forEach(l => {
        const btn = document.getElementById(`btn-${l}`);
        if (l === level) {
            btn.className = "px-6 py-3 rounded-xl font-bold text-sm bg-accent-orange text-dark-900 transition-all shadow-lg";
        } else {
            btn.className = "px-6 py-3 rounded-xl font-bold text-sm bg-dark-700 text-gray-300 hover:bg-dark-600 transition-all";
        }
    });

    // Render cards
    const container = document.getElementById('workout-content');
    container.innerHTML = workoutData[level].map(item => `
        <div class="p-8 rounded-3xl bg-dark-800 border border-dark-700 hover:border-accent-orange transition-all duration-300 group">
            <div class="w-14 h-14 rounded-2xl bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center text-accent-orange text-2xl mb-6">
                <i class="fa-solid ${item.icon}"></i>
            </div>
            <span class="text-xs font-bold uppercase text-accent-orange tracking-wider">${item.sets}</span>
            <h3 class="text-xl font-bold mt-2 mb-3 text-white">${item.title}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">${item.desc}</p>
        </div>
    `).join('');
}

// Initialize default workout
switchWorkout('beginner');

// Diet plans data dictionary
const dietData = {
    muscle: [
        { title: "High-Protein Breakfast", desc: "Oatmeal with whey isolate, organic peanut butter, banana, and whole eggs for sustained morning energy.", calories: "650 kcal • 45g Protein", icon: "fa-egg" },
        { title: "Anabolic Lunch Bowl", desc: "Grilled chicken breast, jasmine rice, roasted sweet potatoes, and avocado with olive oil dressing.", calories: "750 kcal • 55g Protein", icon: "fa-bowl-rice" },
        { title: "Recovery Dinner", desc: "Lean grass-fed steak, quinoa, steamed broccoli, and almonds to support nocturnal muscle repair.", calories: "700 kcal • 50g Protein", icon: "fa-utensils" }
    ],
    loss: [
        { title: "Lean Protein Smoothie", desc: "Spinach, mixed berries, plant-based protein powder, almond milk, and chia seeds.", calories: "320 kcal • 30g Protein", icon: "fa-glass-water" },
        { title: "Metabolic Salad", desc: "Wild-caught tuna or grilled shrimp over mixed greens, cucumber, cherry tomatoes, and lemon vinaigrette.", calories: "400 kcal • 38g Protein", icon: "fa-leaf" },
        { title: "Light Evening Plate", desc: "Baked white fish with asparagus, cauliflower mash, and a side of green tea.", calories: "450 kcal • 40g Protein", icon: "fa-fish" }
    ],
    keto: [
        { title: "Keto Fat-Bomb Plate", desc: "Scrambled eggs with pasture butter, sliced avocado, smoked salmon, and macadamia nuts.", calories: "600 kcal • 35g Fat / Pro", icon: "fa-bacon" },
        { title: "MCT Oil Chicken Salad", desc: "Avocado oil tossed chicken thighs over spinach with walnuts, feta cheese, and olives.", calories: "700 kcal • High Fat", icon: "fa-burger" },
        { title: "Low-Carb Salmon Feast", desc: "Pan-seared Atlantic salmon cooked in ghee, served alongside sautéed garlic spinach.", calories: "650 kcal • Omega-3 Rich", icon: "fa-shrimp" }
    ]
};

function switchDiet(type) {
    // Update button styles
    ['muscle', 'loss', 'keto'].forEach(t => {
        const btn = document.getElementById(`btn-${t}`);
        if (t === type) {
            btn.className = "px-6 py-3 rounded-xl font-bold text-sm bg-accent-green text-dark-900 transition-all shadow-lg";
        } else {
            btn.className = "px-6 py-3 rounded-xl font-bold text-sm bg-dark-700 text-gray-300 hover:bg-dark-600 transition-all";
        }
    });

    // Render cards
    const container = document.getElementById('diet-content');
    container.innerHTML = dietData[type].map(item => `
        <div class="p-8 rounded-3xl bg-dark-800 border border-dark-700 hover:border-accent-green transition-all duration-300 group">
            <div class="w-14 h-14 rounded-2xl bg-accent-green/10 border border-accent-green/20 flex items-center justify-center text-accent-green text-2xl mb-6">
                <i class="fa-solid ${item.icon}"></i>
            </div>
            <span class="text-xs font-bold uppercase text-accent-green tracking-wider">${item.calories}</span>
            <h3 class="text-xl font-bold mt-2 mb-3 text-white">${item.title}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">${item.desc}</p>
        </div>
    `).join('');
}

// Initialize default diet
switchDiet('muscle');

// BMI Calculator Logic
const bmiForm = document.getElementById('bmi-form');
bmiForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseFloat(document.getElementById('bmi-height').value) / 100;
    const weight = parseFloat(document.getElementById('bmi-weight').value);

    if (!height || !weight || height <= 0 || weight <= 0) return;

    const bmi = (weight / (height * height)).toFixed(1);
    const circle = document.getElementById('bmi-value-circle');
    const title = document.getElementById('bmi-category-title');
    const desc = document.getElementById('bmi-desc');

    circle.textContent = bmi;

    let category = "";
    let colorClass = "";
    let descText = "";

    if (bmi < 18.5) {
        category = "Underweight";
        colorClass = "text-amber-400 border-amber-400";
        descText = "Your BMI indicates you are underweight. Consider our Muscle Gain nutrition and strength training plan.";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal Weight";
        colorClass = "text-accent-green border-accent-green";
        descText = "Fantastic! Your weight is in the healthy normal bracket. Maintain your current routine.";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
        colorClass = "text-accent-orange border-accent-orange";
        descText = "Your BMI indicates slight overweight status. Our Fat Loss and HIIT circuits will help you tone up.";
    } else {
        category = "Obese";
        colorClass = "text-red-500 border-red-500";
        descText = "Your BMI is in the obese bracket. Consult with our expert coaches and nutritionists for a customized transformation path.";
    }

    circle.className = `w-24 h-24 rounded-full bg-dark-800 border-2 flex items-center justify-center mx-auto text-2xl font-black ${colorClass}`;
    title.textContent = `${bmi} — ${category}`;
    desc.textContent = descText;
});

// Contact Form Validation & Success message
const contactForm = document.getElementById('contact-form');
const formAlert = document.getElementById('form-alert');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !subject || !message) {
        formAlert.className = "p-4 rounded-xl text-sm font-semibold text-center bg-red-500/10 border border-red-500/20 text-red-400";
        formAlert.textContent = "Please fill in all required fields before submitting.";
        formAlert.classList.remove('hidden');
        return;
    }

    // Success simulation
    formAlert.className = "p-4 rounded-xl text-sm font-semibold text-center bg-accent-green/10 border border-accent-green/20 text-accent-green";
    formAlert.textContent = `Thank you, ${name}! Your message has been sent successfully. Our team will get back to you within 24 hours.`;
    formAlert.classList.remove('hidden');
    contactForm.reset();

    setTimeout(() => {
        formAlert.classList.add('hidden');
    }, 6000);
});

// Sticky Navbar shadow on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('shadow-xl', 'bg-dark-900/95');
    } else {
        navbar.classList.remove('shadow-xl', 'bg-dark-900/95');
    }
});