const CYCLE_START_DATE = "2026-01-01";

const MEALS = [
  { key: "breakfast", name: "Breakfast", icon: "☀" },
  { key: "lunch", name: "Lunch", icon: "◒" },
  { key: "snacks", name: "Evening snacks", icon: "✦" },
  { key: "dinner", name: "Dinner", icon: "☾" },
];

const MENU_CYCLE = [
  { breakfast: "Poha with peanuts, banana & milk", lunch: "Rice, dal tadka, aloo gobi, chapati, salad & curd", snacks: "Tea & roasted chana", dinner: "Vegetable pulao, raita & papad" },
  { breakfast: "Idli, sambar, coconut chutney & fruit", lunch: "Rice, rajma, chapati, cucumber salad & curd", snacks: "Sprouts chaat & lemon water", dinner: "Paneer bhurji, chapati & mixed vegetable soup" },
  { breakfast: "Aloo paratha, curd & seasonal fruit", lunch: "Rice, chole, chapati, onion salad & pickle", snacks: "Tea & vegetable sandwich", dinner: "Lemon rice, sambar, beetroot poriyal & curd" },
  { breakfast: "Vegetable upma, coconut chutney & milk", lunch: "Rice, moong dal, bhindi masala, chapati & salad", snacks: "Banana & peanut chikki", dinner: "Vegetable khichdi, kadhi & papad" },
  { breakfast: "Masala dosa, sambar & fruit", lunch: "Rice, kala chana curry, chapati, salad & curd", snacks: "Tea & bhel puri", dinner: "Matar paneer, jeera rice & chapati" },
  { breakfast: "Besan chilla with mint chutney & milk", lunch: "Rice, dal makhani, chapati, cabbage sabzi & salad", snacks: "Boiled corn with lime", dinner: "Vegetable noodles, chilli paneer & soup" },
  { breakfast: "Poori, aloo sabzi & seasonal fruit", lunch: "Vegetable biryani, raita, salad & gulab jamun", snacks: "Tea & biscuits", dinner: "Dal khichdi, papad & cucumber raita" },
  { breakfast: "Methi thepla, curd & banana", lunch: "Rice, sambar, beans poriyal, chapati & curd", snacks: "Tea & dhokla", dinner: "Chana masala, rice, chapati & salad" },
  { breakfast: "Vegetable bread upma & milk", lunch: "Rice, kadhi pakora, aloo beans, chapati & salad", snacks: "Fruit chaat", dinner: "Pav bhaji with toasted pav & salad" },
  { breakfast: "Rava idli, sambar & coconut chutney", lunch: "Rice, masoor dal, lauki kofta, chapati & curd", snacks: "Tea & roasted makhana", dinner: "Vegetable fried rice, manchurian & soup" },
  { breakfast: "Moong dal cheela, chutney & seasonal fruit", lunch: "Rice, chole, jeera aloo, chapati & salad", snacks: "Lassi & murmura chivda", dinner: "Palak paneer, chapati, rice & salad" },
  { breakfast: "Vegetable oats, toast & milk", lunch: "Rice, dal fry, baingan bharta, chapati & curd", snacks: "Tea & onion pakora", dinner: "Tomato rice, cucumber raita & papad" },
  { breakfast: "Chole kulche & banana", lunch: "Rice, mixed dal, aloo matar, chapati & salad", snacks: "Sprouts bhel", dinner: "Vegetable paratha, curd & tomato soup" },
  { breakfast: "Pongal, sambar, chutney & fruit", lunch: "Rice, kadhi, seasonal vegetable sabzi, chapati & salad", snacks: "Tea & samosa", dinner: "Paneer tikka masala, rice, chapati & salad" },
  { breakfast: "Paneer-stuffed paratha, curd & milk", lunch: "Vegetable pulao, dal, raita, salad & kheer", snacks: "Seasonal fruit & peanuts", dinner: "Dal palak, rice, chapati & roasted papad" },
  { breakfast: "Masala poha, sprouts & tea", lunch: "Rice, lobia curry, chapati, carrot salad & curd", snacks: "Tea & veg cutlet", dinner: "Aloo paratha, curd & mixed vegetable soup" },
  { breakfast: "Uttapam with sambar & chutney", lunch: "Rice, dal tadka, cabbage peas, chapati & salad", snacks: "Buttermilk & roasted peanuts", dinner: "Vegetable handi, jeera rice & chapati" },
  { breakfast: "Sabudana khichdi, curd & fruit", lunch: "Rice, chana dal, bhindi fry, chapati & curd", snacks: "Tea & corn chaat", dinner: "Soya chunk curry, rice, chapati & salad" },
  { breakfast: "Vegetable omelette-style besan toast & milk", lunch: "Rice, sambar, potato roast, chapati & salad", snacks: "Tea & dhokla", dinner: "Mushroom matar, jeera rice & chapati" },
  { breakfast: "Pesarattu, ginger chutney & fruit", lunch: "Rice, dal, rajma masala, chapati & salad", snacks: "Fresh lime water & bhel", dinner: "Vegetable pasta, garlic bread & soup" },
  { breakfast: "Aloo poori & seasonal fruit", lunch: "Vegetable biryani, raita, salad & fruit custard", snacks: "Tea & roasted chana", dinner: "Moong dal khichdi, kadhi & papad" },
  { breakfast: "Vegetable sevai upma & milk", lunch: "Rice, chana masala, chapati, salad & curd", snacks: "Banana smoothie", dinner: "Kadai paneer, rice, chapati & salad" },
  { breakfast: "Dalia with vegetables, toast & fruit", lunch: "Rice, dal fry, pumpkin sabzi, chapati & curd", snacks: "Tea & bread pakora", dinner: "Masala dosa, sambar & coconut chutney" },
  { breakfast: "Mysore masala dosa, sambar & fruit", lunch: "Rice, matar paneer, chapati, salad & curd", snacks: "Sprouts chaat & lemon water", dinner: "Vegetable pulao, dal makhani & raita" },
  { breakfast: "Onion paratha, curd & banana", lunch: "Rice, Gujarati kadhi, aloo capsicum, chapati & salad", snacks: "Tea & pakora", dinner: "Pav bhaji, toasted pav & fruit" },
  { breakfast: "Idli, podi, sambar & milk", lunch: "Rice, dal palak, mixed vegetables, chapati & curd", snacks: "Tea & peanut chikki", dinner: "Chole, rice, chapati & onion salad" },
  { breakfast: "Vegetable sandwich, chutney & fruit", lunch: "Rice, kadhi, soya aloo, chapati & salad", snacks: "Masala corn & buttermilk", dinner: "Paneer pulao, raita & papad" },
  { breakfast: "Mooli paratha, curd & seasonal fruit", lunch: "Rice, dal tadka, veg kofta, chapati & salad", snacks: "Tea & veg momos", dinner: "Lemon sevai, sambar & vegetable poriyal" },
  { breakfast: "Rava upma, chutney & milk", lunch: "Rice, rajma, chapati, salad & curd", snacks: "Fruit chaat & tea", dinner: "Shahi paneer, peas pulao, chapati & salad" },
  { breakfast: "Chana sundal, dosa & seasonal fruit", lunch: "Rice, dal fry, seasonal mixed sabzi, chapati, curd & kheer", snacks: "Tea & biscuits", dinner: "Vegetable khichdi, kadhi, papad & pickle" },
];

const now = new Date();
const today = toDateString(now);
let selectedDate = today;
let displayedMonth = new Date(now.getFullYear(), now.getMonth(), 1);

const calendarGrid = document.querySelector("#calendar-grid");
const menuContent = document.querySelector("#menu-content");

function toDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDate(dateString, options = { weekday: "long", month: "long", day: "numeric" }) {
  return new Date(`${dateString}T12:00:00`).toLocaleDateString(undefined, options);
}

function getCycleDay(dateString) {
  const selected = new Date(`${dateString}T00:00:00Z`);
  const cycleStart = new Date(`${CYCLE_START_DATE}T00:00:00Z`);
  const daysSinceStart = Math.floor((selected - cycleStart) / 86_400_000);
  return ((daysSinceStart % MENU_CYCLE.length) + MENU_CYCLE.length) % MENU_CYCLE.length;
}

function renderCalendar() {
  const year = displayedMonth.getFullYear();
  const month = displayedMonth.getMonth();
  document.querySelector("#calendar-month").textContent =
    displayedMonth.toLocaleDateString(undefined, { month: "long", year: "numeric" });
  calendarGrid.replaceChildren();

  ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].forEach((day) => {
    const label = document.createElement("span");
    label.className = "weekday";
    label.textContent = day;
    calendarGrid.append(label);
  });

  const firstWeekday = new Date(year, month, 1).getDay();
  const firstDate = new Date(year, month, 1 - firstWeekday);
  for (let index = 0; index < 42; index += 1) {
    const date = new Date(firstDate);
    date.setDate(firstDate.getDate() + index);
    const dateString = toDateString(date);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "calendar-day";
    button.textContent = String(date.getDate());
    button.setAttribute("aria-label", formatDate(dateString));
    button.setAttribute("aria-pressed", String(dateString === selectedDate));
    if (date.getMonth() !== month) button.classList.add("outside");
    if (dateString === today) button.classList.add("today");
    if (dateString === selectedDate) button.classList.add("selected");
    button.addEventListener("click", () => selectDate(dateString));
    calendarGrid.append(button);
  }
}

function renderMenu(dateString) {
  const cycleDay = getCycleDay(dateString);
  const menu = MENU_CYCLE[cycleDay];
  document.querySelector("#selected-date-label").textContent =
    dateString === today ? `Today · ${formatDate(dateString)}` : formatDate(dateString);
  document.querySelector("#cycle-day").textContent = `30-day menu cycle · Day ${cycleDay + 1}`;
  menuContent.replaceChildren();

  const menuItems = document.createElement("div");
  menuItems.className = "menu-items";
  MEALS.forEach(({ key, name, icon }) => {
    const mealCard = document.createElement("article");
    mealCard.className = "meal-card";
    const mealIcon = document.createElement("span");
    mealIcon.className = "meal-icon";
    mealIcon.setAttribute("aria-hidden", "true");
    mealIcon.textContent = icon;

    const details = document.createElement("div");
    const mealName = document.createElement("p");
    mealName.className = "meal-name";
    mealName.textContent = name;
    const description = document.createElement("p");
    description.className = "meal-description";
    description.textContent = menu[key];
    details.append(mealName, description);
    mealCard.append(mealIcon, details);
    menuItems.append(mealCard);
  });
  menuContent.append(menuItems);
}

function selectDate(dateString) {
  selectedDate = dateString;
  displayedMonth = new Date(`${dateString}T12:00:00`);
  displayedMonth.setDate(1);
  renderCalendar();
  renderMenu(dateString);
}

document.querySelector("#previous-month").addEventListener("click", () => {
  displayedMonth = new Date(displayedMonth.getFullYear(), displayedMonth.getMonth() - 1, 1);
  renderCalendar();
});
document.querySelector("#next-month").addEventListener("click", () => {
  displayedMonth = new Date(displayedMonth.getFullYear(), displayedMonth.getMonth() + 1, 1);
  renderCalendar();
});
document.querySelector("#go-today").addEventListener("click", () => selectDate(today));
document.querySelector("#footer-year").textContent = String(now.getFullYear());

renderCalendar();
renderMenu(today);
