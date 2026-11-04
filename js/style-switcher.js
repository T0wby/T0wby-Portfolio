/* ========================== toggle style switcher =========================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style - switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/* ========================== remember the choice =========================== */
/* private-mode browsers throw on storage access, so never let it break the switcher */
function remember(key, value)
{
    try { localStorage.setItem(key, value); } catch (e) {}
}
function recall(key)
{
    try { return localStorage.getItem(key); } catch (e) { return null; }
}
/* ========================== theme colors =========================== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    remember("skin", color);
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}
setActiveStyle(recall("skin") || "color-1");
/* ========================== theme light and dark mode =========================== */
const dayNight = document.querySelector(".day-night");
if(recall("theme") === "dark")
{
    document.body.classList.add("dark");
}
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    remember("theme", document.body.classList.contains("dark") ? "dark" : "light");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})