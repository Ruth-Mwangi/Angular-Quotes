export class Quote {

    showQuoteDetails:boolean;
    constructor(public id:number,public datePosted:Date,public userName:string,public author:string,public quote:string,public upVote:number,public downvote:number){

        this.showQuoteDetails=false;
    }
}
