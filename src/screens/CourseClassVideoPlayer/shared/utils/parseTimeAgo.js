
const relativeTimeFormat = new Intl.RelativeTimeFormat("es");


/* ---------------- Transform the date in respective formats ---------------- */

const optionsParseDate  = [
  {
    format : [ "seconds", e =>   e / 1000],
    max : 60,
  },
  {
    format : [ "minutes", e =>   e / 1000  / 60],
    max : 60,
  },
  {
    format : [ "hours", e =>  e / 1000 / 60 / 60],
    max : 24,
  },
  {
    format : [ "days", e =>  e / 1000 / 60 / 60 / 24 ],
    max : 30,
  },
  {
    format : [ "months", e =>  e / 1000 / 60 / 60 / 24 / 30 ],
    max : 12,
  },
]


/* ------------------------------ Get time ago ------------------------------ */

/**
 * 
 * @param {string} lastDate
 * @returns {string} 
 */
function parseTimeAgo(lastDate) {
  const now = new Date();
  const pastDate = new Date(lastDate);
  const milliseconds = now.getTime() - pastDate.getTime();
  if(pastDate.getTime() > now.getTime()) return "";
  
  for(let { format, max } of optionsParseDate){
    let [ formatDate, callbackTransformDate ] = format;
    let roundDate = Math.floor(callbackTransformDate(milliseconds));
    
    if(formatDate === "seconds" && roundDate < 60)  return "justo ahora";
    if(formatDate === "months" && roundDate > 12) return pastDate.toLocaleString();
    
    if(roundDate < max) return relativeTimeFormat.format(-roundDate,formatDate);
    
  } 
}

export default parseTimeAgo;