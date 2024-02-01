var posts=["2023/09/18/Burpsuite的使用/","2024/01/01/C语言/","2023/09/18/MYSQL提权/","2023/09/18/JS/","2024/01/01/Node.js/","2023/09/18/ROIS 冬训题解/","2023/09/18/The Missing Semester/","2023/09/18/HTTP协议/","2023/09/18/鲲鹏基座-跨平台软件转移/","2023/09/18/SQL/","2023/10/28/Web/","2023/09/18/Linux基本命令/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };