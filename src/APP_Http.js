var APP_http = {
    get(data /*header*/){
    return new Promise(function(resolve, reject){
        var req = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
      req.open('GET', data, true);
      //req.setRequestHeader(header);
      req.onreadystatechange = function(){
       if(this.readyState == 4 && this.status == 200){
           resolve(JSON.parse(this.responseText));
       }else{
         reject(this.status + ':'+ this.statusText);
       }
    }



      req.send(null);
          });
    },
    post(data,header){
        return new Promise(function(resolve, reject){
            try {
            var req = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
          //  var body;
            req.open('POST', data, true);
            req.setRequestHeader(header);
           // req.onreadystatechange = function(){
                //body
          //  }
            var body;
            req.send(resolve(body));
            } catch(err){
                reject(err);
            }
            
             });
    },
    setFormData(form,handler){
        var attr = form.getAttribute("encrypt=","multipart/form-data");
        if(!attr){
            attr = form.setAttribute("encrypt=","multipart/form-data");
        }else{
            var req = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
            var fData = new FormData(form);
            req.open('POST', handler, true);
            //Promise.resolve(fData);
            req.send(Promise.resolve(fData));
            //Promise.resolve(fData);
        }
    },
    getSrvData(data){
      var script = document.createElement('script');
      script.src = data;
      document.body.appendChild(script);
      Promise.resolve();
    },


};