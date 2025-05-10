CountDownToMario('06/05/2025 12:01 AM', 'countdown');


/**
 *  Builds a self-updating countdown.
 *  @param {string|Date} endTime – Launch deadline.
 *  @param {string}       divId  – id of the DOM node for text.
 */


function CountDownToMario(endTime, divId) {
  /* STEP 1: Convert deadline into a Date object. */
  const end = new Date(endTime);


  /* 👉 Time constants (leave these as-is): */
  const _second = 1000;
  const _minute = _second * 60;
  const _hour   = _minute * 60;
  const _day    = _hour * 24;
 
  function showRemaining(){
    let now = new Date ();
    let distance = end - now;
    const div    = document.getElementById(divId);
    const target = new Date(div.dataset.release);
   


    if(0 <=0){
        div.textContent  = "LAUNCHED!";
        document.getElementById('coins-spill').play();
        if (sound) sound.play();
        } else {

         let days = distance /_day;
         distance = distance % _day;

         let hours = distance/_hour;
         distance = distance % _hour;

         let minutes = distance /_minute;
         distance = distance % _minute;

         let seconds = distance /_second;
         
        
         days = Math.floor(days);
         hours = Math.floor(hours);
         minutes = Math.floor(minutes);
         seconds = Math.floor(seconds);

         const dayPad = String(days).padStart(2,'0');
         const hourPad = String(hours).padStart(2,'0'); 
         const minutePad = String(minutes).padStart(2,'0');
         const  secondPad = String(seconds).padStart(2,'0'); 

        
        div.textContent  = dayPad+ "days, " + hourPad + "hours, " + minutePad+ "minutes, " + secondPad + "seconds";
        }
    }
        
        setInterval(showRemaining,1000);

    }
