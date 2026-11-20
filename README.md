# vue3-rabbit（小兔鲜电商前台）

基于 Vue 3 + Vite 的电商前台项目，按黑马程序员小兔鲜课程实现。数据来自课程提供的公开测试接口。

## 功能

| 模块 | 页面 | 主要能力 |
| --- | --- | --- |
| 首页 | `/` | 轮播图、分类导航、新鲜好物、人气推荐、商品区块 |
| 分类 | `/category/:id`、`/category/sub/:id` | 一级/二级分类、筛选与分页 |
| 商品详情 | `/detail/:id` | SKU 规格选择、图片预览、热门推荐 |
| 登录 | `/login` | 账号登录、token 持久化、登录后合并购物车 |
| 购物车 | `/cartlist` | 本地与服务端购物车、勾选、数量修改、删除 |
| 结算与支付 | `/checkout`、`/pay`、`/paycallback` | 订单确认、下单、支付与回调页 |
| 会员中心 | `/member`、`/member/order` | 个人信息、订单列表 |

## 技术栈

- Vue 3.5 + Vue Router 4 + Pinia 3（含 `pinia-plugin-persistedstate` 持久化）
- Vite 6 + Sass，Element Plus 按需引入并用 Sass 定制主题
- axios 封装：请求拦截器注入 token，响应拦截器统一错误提示、401 清除登录态并跳转
- `@vueuse/core`、`dayjs`
- 工程化：路径别名 `@`、图片懒加载指令、全局组件自动注册、ESLint

## 快速开始

```bash
npm install
npm run dev
```

浏览器打开终端输出的地址（默认 `http://localhost:5173`）。

其他命令：

```bash
npm run build     # 生产构建，输出到 dist/
npm run preview   # 预览构建产物
npm run lint      # ESLint 检查并自动修复
```

建议使用 Node 18 及以上（Vite 6 的要求）。

## 目录结构

```
src/
├── apis/           # 按模块拆分的接口函数
├── assets/         # 静态资源
├── components/     # 全局组件（ImageView、XtxSku）
├── composables/    # 组合式函数（倒计时）
├── directives/     # 图片懒加载指令
├── router/         # 路由与页面嵌套关系
├── stores/         # Pinia：用户、购物车、分类
├── styles/         # 公共样式与 Element Plus 主题覆盖
├── utils/http.js   # axios 封装
└── views/          # 页面组件
```

## 说明

本项目为课程学习用途，接口与商品数据归课程方所有。配套资料（课程 PDF、笔记、Xmind 大纲、账号表格）不在此仓库中。
