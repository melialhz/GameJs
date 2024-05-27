
  
window.onload = () => {


  (document.getElementById('mode-toggle') as HTMLInputElement).addEventListener('change', function() {
    document.documentElement.classList.toggle('light', this.checked);
  });

 
};
