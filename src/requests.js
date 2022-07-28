export class Request{
    constructor(url){
        this.url=url;
    }
    async get(){
        const Response = await fetch(this.url);
        const ResponseData = await Response.json();

        return ResponseData;
    }
    async post(Data){
        const Response = await fetch(this.url,{
            method : "POST",
            body : JSON.stringify(Data),
            headers : {
                "Content-type" : "application/json; charset=UTF-8"
            }
        });

        const ResponseData = await Response.json();

        return ResponseData;

    }
    async put(id,Data){
        const Response = await fetch(this.url + "/" + id,{
            method : "PUT",
            body : JSON.stringify(Data),
            headers : {
                "Content-type" : "application/json; charset=UTF-8"
            }
        });

        const ResponseData = await Response.json();

        return ResponseData;
        
    }
    async delete(id){
        const Response = await fetch(this.url + "/" + id,{
            method : "DELETE"
            }
        );

        return "Veri Silindi";
        
    }
}