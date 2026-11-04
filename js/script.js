/* ============================== typing animation ============================ */
var typed = new Typed(".typing",{
    strings:["Software Developer","C# / .NET Developer","WPF & Blazor Developer","Game Developer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
/* ============================== Aside ============================ */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++)
      {
          const a = navList[i].querySelector("a");
          a.addEventListener("click", function()
          {
              removeBackSection();
              for(let j=0; j<totalNavList; j++)
              {
                  if(navList[j].querySelector("a").classList.contains("active"))
                  {
                      addBackSection(j);
                     // allSection[j].classList.add("back-section");
                  }
                  navList[j].querySelector("a").classList.remove("active");
              }
              this.classList.add("active")
              showSection(this);
              if(window.innerWidth < 1200)
              {
                  asideSectionTogglerBtn();
              }
          })
      }
      function removeBackSection()
      {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }   
      }
      function addBackSection(num)
      {
        allSection[num].classList.add("back-section");
      }
      function showSection(element)
      {
          for(let i=0; i<totalSection; i++)
          {
              allSection[i].classList.remove("active");
          }
          const target = element.getAttribute("href").split("#")[1];
          document.querySelector("#" + target).classList.add("active")
      }
      function updateNav(element)
      {
          for(let i=0; i<totalNavList; i++)
          {
              navList[i].querySelector("a").classList.remove("active");
              const target = element.getAttribute("href").split("#")[1];
              if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
              {
                navList[i].querySelector("a").classList.add("active");
              }
          }
      }
      document.querySelectorAll(".hire-me").forEach(el => el.addEventListener("click", function()
      {
          const sectionIndex = this.getAttribute("data-section-index");
          //console.log(sectionIndex);
          showSection(this);
          updateNav(this);
          removeBackSection();
          addBackSection(sectionIndex);
      }))
      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click", () => 
            {
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn()
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i=0; i<totalSection; i++ )
                {
                    allSection[i].classList.toggle("open");
                }
            }
/* ============================== Portfolio drawing set ============================ */
const dsRegister = document.querySelector(".portfolio .ds");
if (dsRegister)
{
    const sheets = dsRegister.querySelectorAll(".ds-sheet"),
          filters = dsRegister.querySelectorAll(".ds-filter"),
          count = dsRegister.querySelector(".ds-count");

    /* one sheet opens in place; no modal, no detail view */
    dsRegister.querySelectorAll(".ds-row").forEach(row =>
    {
        const sheet = row.closest(".ds-sheet");
        row.addEventListener("click", () =>
        {
            const open = row.getAttribute("aria-expanded") === "true";
            row.setAttribute("aria-expanded", String(!open));
            sheet.classList.toggle("is-open", !open);
        });
    });

    /* a scroll region that does not scroll is a dead tab stop */
    const boxes = dsRegister.querySelectorAll(".ds-dwgbox");
    const syncBoxes = () => boxes.forEach(b =>
    {
        b.tabIndex = b.scrollWidth > b.clientWidth ? 0 : -1;
    });
    dsRegister.querySelectorAll(".ds-row").forEach(r => r.addEventListener("click", () => setTimeout(syncBoxes, 0)));
    window.addEventListener("resize", syncBoxes);
    syncBoxes();

    /* one control propagates across the whole register */
    filters.forEach(btn =>
    {
        btn.addEventListener("click", () =>
        {
            const want = btn.dataset.filter;
            filters.forEach(b => b.setAttribute("aria-pressed", String(b === btn)));
            let shown = 0;
            sheets.forEach(sheet =>
            {
                const match = want === "all" || sheet.dataset.stack.split(" ").includes(want);
                sheet.hidden = !match;
                if (match) { shown++; }
                else
                {
                    /* a hidden sheet must not stay open behind the filter */
                    sheet.classList.remove("is-open");
                    sheet.querySelector(".ds-row").setAttribute("aria-expanded", "false");
                }
            });
            /* a year band with nothing left under it is not a band */
            dsRegister.querySelectorAll(".ds-band").forEach(band =>
            {
                const list = band.nextElementSibling;
                band.hidden = !list.querySelector(".ds-sheet:not([hidden])");
                list.hidden = band.hidden;
            });
            count.textContent = shown + " of " + sheets.length + " sheets";
        });
    });
}
