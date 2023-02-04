import Request from "./request-model"
class Question extends Request{
    constructor(id, platform, displayValue, parentId){
        super(id, platform, displayValue, parentId)
    }
}

export default Question