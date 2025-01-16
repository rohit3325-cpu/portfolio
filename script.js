function startchangingcontent(){
  let array = ['Frontend Developer', 'Web Developer', 'UI/UX Designer'];
  let index=0;
  setInterval(() => {
    document.getElementById('changingcontent').innerHTML = array[index];
    index = (index + 1) % array.length;
  }, 1000);
}

startchangingcontent();