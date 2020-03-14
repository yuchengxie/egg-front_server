'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  //过滤上传
  async uploadTag() {
    let fields = this.ctx.request.body;
    console.log("tag:" + JSON.stringify(fields));
    //重复不上传
    let tag = fields.tag;
    let arr = await this.ctx.model.Tag.find({ tag });
    console.log('arr:', arr);
    if (arr.length > 0) {
      this.ctx.body = {
        code:20001,
        des: "标签已存在"
      }
      return;
    }
    let res = new this.ctx.model.Tag({
      client: fields.client,
      tag: fields.tag
    })
    await res.save();
    //写入数据库
    this.ctx.body = {
      code: 20000,
      tag: fields.tag,
      des: "标签上传成功"
    };
  }

  //获取列表
  async tagList() {
    let result = await this.ctx.model.Tag.find();
    this.ctx.body = {
      code: 20000,
      list: result
    }
  }
}

module.exports = HomeController;
