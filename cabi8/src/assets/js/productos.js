//Leer el archivo json para cargar los respectivos productos

window.onload = function() {
    const jsonService = window['ng']['core']['jsonService'];
    
    // Llama al método getJsonData() para leer el archivo JSON
    jsonService.getJsonData('ruta/al/archivo/data.json').subscribe(
      data => {
        // Aquí puedes utilizar los datos JSON
        console.log(data);
      },
      error => {
        console.error('Error al leer el archivo JSON:', error);
      }
    );
  };
  
