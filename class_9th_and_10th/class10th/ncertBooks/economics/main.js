let fetchBtn = document.getElementById('bd');


let mainContainer = document.getElementById('mainContainer');



const xhr = new XMLHttpRequest();


xhr.open('GET', '/jsons/class_9th_and_10th/class10th/ncertBooks/economics/api.json', true);


xhr.onload = function() {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let lists = json.lists;
    let listsHtml = "";

    lists.forEach(function(element) {

      let movies = `<div class="col-md-4" id="${element.Ids}" >
          <div class="card mb-4 shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="${element.Thumbnail}" alt="">

            <div class="card-body card-light bg-dark">
              <h2 class="card-title text-light">CHAPTER : ${element.ChapterNumber}</h2>
              <h4 class="card-text text-danger">Name : <span class="text-danger">${element.ChapterName}</span></h4>
              
              
               
              
              <div class="d-flex justify-content-between align-items-end my-4">
              
                <div class="btn-group">
                
                
                 <a href="${element.Download}">
                  <button type="button" class="btn btn-outline-primary" style="width: 100px;">Download</button>
                  </a>
                 
                  
                  
                </div>
                <small class="text-muted">${element.Time} ${element.Am_Pm}</small>
              </div>
            </div>
          </div>
        </div>`;

      listsHtml += movies;


    });

    mainContainer.innerHTML = listsHtml;





  }
  else {
    console.log("Somthing error.");
  }
}


xhr.send();
