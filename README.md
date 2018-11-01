### 这是一个自动生成配套vue文件套餐

#### 可选择项目中安装或者全局安装
> 1.cnpm install automatic-file-gao --save     ||    1.1 cnpm install automatic-file-gao -g
- 仅限于项目中安装配置项 
>package.json 
```JS

"scripts": {
    "watch": "automatic-file-gao"//配置命令
  },
```
>cnpm run watch  

- 仅限于全局安装执行命令
>automatic-file-gao

- 如果自己创建config.json 请按照以下格式   
##### 如果没有创建config.json,直接执行命令  自动生成config.json和默认权限文件夹 view
```JS
{
  "dirname":"view",//权限文件夹  可自动修改,在根目录下可自定义创建
  "outPut":"dist"//打包文件夹
}
```
dirname项的文件夹view下创建文件夹 自动生成配套文件
## view
>home

>>src

>>>home.vue
```JS
      <template>
          <div>

          </div>
      </template>

      <script>
          export default {
              
          }
      </script>

      <style scoped>
      @import "../style/index.css";

      </style>
```

>>style

>>>index.css
```JS
      /**css*/

```

>>index.js
```JS
  import home from "./src/home.vue";
export default home;

```
