// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
// More generally given parameters:
// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
// the function nbYear should return n number of entire years needed to get a population greater or equal to p.
// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

const nbYear = (p0, percent, aug, p) => {
    let year = 0
    do {
      p0 = p0 + (p0 * percent) + aug;
      // console.log(p0);
      year++;
      
    }
    while (p0 <= p);
      return year
    }
    console.log(nbYear(1000, .02, 50, 1200))