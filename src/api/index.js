//当前的模块：API借口进行统一的管理
import {requests} from './request'

//首页三级联动接口
//api/product/getBaseCategoryList    get 无参数

export const reqCategoryList =()=>requests({url:'/api/product/getBaseCategoryList',method:'get'});

    //发请求:axios发请求返回的结果是Promise对象 

    