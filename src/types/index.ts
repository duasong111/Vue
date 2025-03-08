//定义一个接口,用于限制person对象的具体属性
export interface PersonInter{
    id:string,
    name:string,
    age:number
}


//一个自定义的类型
//export type Persons = PersonInter[]  //两种方式
export type Persons = Array<PersonInter>


