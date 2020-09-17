项目名称：Killknife

项目介绍：这是一款英语阅读小程序，定位为打发零散时间，满足用户了解国内外突发资讯需求。

项目效果截图：

首页

 <img src="http://mmbiz.qpic.cn/mmbiz_jpg/HmdYzog8XwXG3DXXpwnz3icCUrgIMTZzoiag525icm5DaQj6FgecgKeg84ghQ0e1M93uToAuPrjeEWqxAibNlGmOEg/0?wx_fmt=jpeg%EF%BC%89" alt="加载失败" style="zoom:25%;" />

搜索

 <img src="http://mmbiz.qpic.cn/mmbiz_jpg/HmdYzog8XwXG3DXXpwnz3icCUrgIMTZzoicsEFAj9teVJC0moWDc6ZQz0kDV68M8xNOjDtM4MY0nRiaNQeTBG3Vdg/0?wx_fmt=jpeg" alt="加载失败" style="zoom:25%;" />

收藏

 <img src="http://mmbiz.qpic.cn/mmbiz_png/HmdYzog8XwXG3DXXpwnz3icCUrgIMTZzoiajyAEU53DzHkTjg4OAJibYmeXBvXTcJzuMjOQGiaZ4fyVj5puRAP9ozQ/0?wx_fmt=png" alt="加载失败" style="zoom:25%;" />

 <img src="http://mmbiz.qpic.cn/mmbiz_jpg/HmdYzog8XwXG3DXXpwnz3icCUrgIMTZzo2O2koXOLOewF5hbQsoen3OMlfxLibicZecS0BicVvRMoZCNj1Z7k7RtQQ/0?wx_fmt=jpeg" alt="加载失败" style="zoom:25%;" />

部署教程：

```
1.https://github.com/Xiaoweidumpb/Miniprogram.git
2.修改小程序开发者ID，APPID

3.建立云数据库集合 news,favorite

文章有作者，内容，图片，标题
	news-author
	    -content
	    -imag
	    -title
	    (_id由数据库自动生成)
	   
收藏有 openid，article_id
favorite-openid
	    -article_id
开源许可证标注：Apache License Version 2.0


```





