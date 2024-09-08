# blank-tools 空白工具包

electron练习项目,托盘程序,小工具合集（不断学习完善中...）

使用electron-vite构建 [electron-vite官网](https://electron-vite.org/)

```    
└─src
    │  
    ├─common
    │      events.ts        // 事件相关
    │      var.ts           // 变量、常量相关
    │      
    ├─main
    │  │  index.ts          // main入口文件
    │  │  
    │  └─tray               // 托盘相关
    │          menu.ts
    │          tray.ts
    │          
    ├─preload               // preload
    │      index.d.ts
    │      index.ts
    │      
    └─renderer              // vite前端
        │  index.html
        │  
        └─src
            │  App.vue      // 处理路由消息
            │  env.d.ts
            │  main.ts
            │  router.ts    // 页面路由
            │  
            ├─assets
            │      index.less   // 样式文件
            │      
            ├─components        // 组件
            └─pages             // 页面
```

学习的过程中做一些工具整合，您可以：

- 跟我一起学习
- 一起维护，增加好用的工具


> 燕雀也想有鸿鹄之志
