webpackJsonp([40105078831780],{780:function(e,A){e.exports={data:{post:{id:"/Users/dong/dong/blogs/content/posts/2018-12-25--网红工具了解下-obs直播教学/index.md absPath of file >>> MarkdownRemark",html:'<p>不是为了做网红. 团队内部做分享,需要把视频录制下来,做知识积累. 想做的高大上呢. 所以查资料看看 youtube 上高大上的视频怎么搞出来的. 一查才发现,原来网红这个群体已经把直播工具用到炉火纯青的地步了. 下面进一步了解呢.</p>\n<p>在了解文章前 大家最好对图片是什么有一个初步的了解;</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/OBSDemoApp-6431b8272ff6f4784c1552c6b30acbbc-54a8d.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 77.13625866050808%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGZ8Go0WV//xAAaEAADAAMBAAAAAAAAAAAAAAAAAQIDEiEi/9oACAEBAAEFAonYVYpG+7UP0cP/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAbEAACAQUAAAAAAAAAAAAAAAAAIQECECMxYf/aAAgBAQAGPwJ1zEcMiFoQ3b//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhUUFh/9oACAEBAAE/Iba17PqEVTwO7CWt1kBu0dOHZYAqf//aAAwDAQACAAMAAAAQvM//xAAXEQADAQAAAAAAAAAAAAAAAAAAARFR/9oACAEDAQE/EIsIj//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPxCsrP/EABsQAQEAAwADAAAAAAAAAAAAAAERACFBMVHR/9oACAEBAAE/EI4aBsvxjkYoreTazuVFqZXxzIKByMyJPoN5gQMhNOf/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="obs"\n        title=""\n        src="/static/OBSDemoApp-6431b8272ff6f4784c1552c6b30acbbc-78f2b.jpg"\n        srcset="/static/OBSDemoApp-6431b8272ff6f4784c1552c6b30acbbc-dce19.jpg 200w,\n/static/OBSDemoApp-6431b8272ff6f4784c1552c6b30acbbc-c1413.jpg 400w,\n/static/OBSDemoApp-6431b8272ff6f4784c1552c6b30acbbc-78f2b.jpg 800w,\n/static/OBSDemoApp-6431b8272ff6f4784c1552c6b30acbbc-54a8d.jpg 866w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>问题</h2>\n<p>从一些问题入手,来浅层次了解下相关工具</p>\n<h3>obs 是什么</h3>\n<p>看下<a href="https://obsproject.com/">官方</a>描述:“Free and open source software for video recording and live streaming.”\n从这句话我们知道 他是用来做视频录制,可以生成直播流的工具,是一款开源软件,当前斗魚等直播平台 都是在这个基础上进行开发;该软件官方文档 支持 16 国语言,可见其流程程序;</p>\n<p><a href="https://obsproject.com/">feature</a>:</p>\n<ol>\n<li>\n<p>高性能实时视频音频捕获与合并;</p>\n</li>\n<li>\n<p>视频数据来源广;\n可以从图片, 文本,浏览器,屏幕,摄像头等获取视频流;</p>\n</li>\n<li>\n<p>多场景化,无缝切换;</p>\n</li>\n<li>\n<p>可以实现实时播放;\n(推流)将本地生成的视频流实时推送到 youtube,\bmixer, 优酷,斗鱼等视频平台,其他人可以直接收看,后面又可以看录播内容;</p>\n</li>\n<li>\n<p>合成视频布局自定义处理;\n通过简单的可视化拖拽实现多个视频的布局</p>\n</li>\n<li>\n<p>插件机制可扩展;\n强大的程序猿通过编写脚本插件等实现定制功能;</p>\n</li>\n<li>\n<p>多平台支持, windows mac linux 支持;</p>\n</li>\n</ol>\n<h3>obs 直播摄像头透明背景怎么弄</h3>\n<p>经常在 youtube 上看到下图类似的视频,人物 \b 跃然纸上,又很少影响讲解内容的地方; 如何做到呢?\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/v2-5963caab0b462113a6c0fce42ca59e35_hd-aa63fa577ed2ad30ddcb71421d684a0d-63130.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 550px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 47.63636363636364%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEDBf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB51uOVFf/xAAaEAEAAQUAAAAAAAAAAAAAAAABAAIQERMx/9oACAEBAAEFAgmbVrrez//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABcQAAMBAAAAAAAAAAAAAAAAAAACEDH/2gAIAQEABj8Cmi3/xAAZEAADAAMAAAAAAAAAAAAAAAAAATEQEUH/2gAIAQEAAT8hpwaSI2xQvJ//2gAMAwEAAgADAAAAELMP/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8QJ//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPxCxj//EABsQAQADAAMBAAAAAAAAAAAAAAEAESExQVGB/9oACAEBAAE/EBFJS8F6lwGF2ks8fYoFgWi+JoXuQ0L2f//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="v2 5963caab0b462113a6c0fce42ca59e35 hd"\n        title=""\n        src="/static/v2-5963caab0b462113a6c0fce42ca59e35_hd-aa63fa577ed2ad30ddcb71421d684a0d-63130.jpg"\n        srcset="/static/v2-5963caab0b462113a6c0fce42ca59e35_hd-aa63fa577ed2ad30ddcb71421d684a0d-202ec.jpg 200w,\n/static/v2-5963caab0b462113a6c0fce42ca59e35_hd-aa63fa577ed2ad30ddcb71421d684a0d-900dc.jpg 400w,\n/static/v2-5963caab0b462113a6c0fce42ca59e35_hd-aa63fa577ed2ad30ddcb71421d684a0d-63130.jpg 550w"\n        sizes="(max-width: 550px) 100vw, 550px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>简单来说,把有绿幕的视频流逐帧做”扣图”处理, 然后与另一视频源合并;将处理过程可视化便可见下图</p>\n<p><a href="https://blog.csdn.net/huanghuangjin/article/details/81461040">图片绿幕处理算法</a>\n<img src="/20180806224311406-ecf17910d103d2c8afff176abd716bdf.gif" width="922" hegiht="922x500" align="center"></p>\n<p>\b\b 做为一个程序员, \b\b 肯定要死磕到底,如何实现这一流程呢?</p>\n<p>我们的第一印象,图片由像素组成的,将特征点(绿幕)逐一判断,如果符合就设置为透明.这样就需要两个循环,多层循环视频流里每一 \b 帧图像,内层 \b 循环 \b 图像的每一个像素点,如果在阀值范围内,则设置为透明;</p>\n<p>代码很简单, 当然如果你写下去会发现 \b 效率极差. 哈哈.<br>\n其实这个逻辑 openCV\b 已经给我们做到了封装,其算法都是通过 \b\b 矩阵运算,故性能有所保障;\n其两个步骤便可实现</p>\n<ol>\n<li>通过 \b 阀值与源图片文件得到图像掩码(二值化,即下图中的黑白图);</li>\n<li>将掩码从源图像中获取透明效果图,再将透明效果图与另一视频源做合并 处理即可;</li>\n</ol>\n<img src="/20180806224311406-ecf17910d103d2c8afff176abd716bdf.gif" width="922" hegiht="922x500" align="center">\n<p><a href="https://blog.csdn.net/huanghuangjin/article/details/81461040">OpenCV 之图像分割(六) 绿幕背景视频抠图</a></p>\n<p><a href="https://zhuanlan.zhihu.com/p/34608752">绿屏抠像教学</a></p>\n<h3>插件实现</h3>\n<p>(obs plugins 官方文档)[https://obsproject.com/docs/plugins.html]</p>\n<p>偷个懒 这块暂时没用到,后面再看</p>\n<h3>有那些插件</h3>\n<p>\b<a href="http://www.obsapp.com/apps/">斗鱼相关插件</a>\n<a href="http://www.obsapp.com/article/4173.html">斗图</a></p>\n<h2>相关资料</h2>\n<p><a href="http://www.obsapp.com/">obsapp</a>\n<a href="https://obsproject.com/">obs 官网</a>\n<a href="http://www.obsapp.net/">obs 中文网</a>\n<a href="https://juejin.im/post/5b14cacae51d45068b495725">obs+node-media-server+flv.js 实现录播和直播</a></p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"不是为了做网红. 团队内部做分享,需要把视频录制下来,做知识积累. 想做的高大上呢. 所以查资料看看 youtube 上高大上的视频怎么搞出来的. 一查才发现,原来网红这个群体已经把直播工具用到炉火纯青的地步了. 下面进一步了解呢."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"在了解文章前 大家最好对图片是什么有一个初步的了解;"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/OBSDemoApp-6431b8272ff6f4784c1552c6b30acbbc-54a8d.jpg",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 77.13625866050808%; position: relative; bottom: 0; left: 0; background-image: url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGZ8Go0WV//xAAaEAADAAMBAAAAAAAAAAAAAAAAAQIDEiEi/9oACAEBAAEFAonYVYpG+7UP0cP/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAbEAACAQUAAAAAAAAAAAAAAAAAIQECECMxYf/aAAgBAQAGPwJ1zEcMiFoQ3b//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhUUFh/9oACAEBAAE/Iba17PqEVTwO7CWt1kBu0dOHZYAqf//aAAwDAQACAAMAAAAQvM//xAAXEQADAQAAAAAAAAAAAAAAAAAAARFR/9oACAEDAQE/EIsIj//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPxCsrP/EABsQAQEAAwADAAAAAAAAAAAAAAERACFBMVHR/9oACAEBAAE/EI4aBsvxjkYoreTazuVFqZXxzIKByMyJPoN5gQMhNOf/2Q=='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"obs",title:"",src:"/static/OBSDemoApp-6431b8272ff6f4784c1552c6b30acbbc-78f2b.jpg",srcSet:["/static/OBSDemoApp-6431b8272ff6f4784c1552c6b30acbbc-dce19.jpg 200w","/static/OBSDemoApp-6431b8272ff6f4784c1552c6b30acbbc-c1413.jpg 400w","/static/OBSDemoApp-6431b8272ff6f4784c1552c6b30acbbc-78f2b.jpg 800w","/static/OBSDemoApp-6431b8272ff6f4784c1552c6b30acbbc-54a8d.jpg 866w"],sizes:["(max-width:","800px)","100vw,","800px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"问题"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"从一些问题入手,来浅层次了解下相关工具"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"obs 是什么"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"看下"},{type:"element",tagName:"a",properties:{href:"https://obsproject.com/"},children:[{type:"text",value:"官方"}]},{type:"text",value:"描述:“Free and open source software for video recording and live streaming.”\n从这句话我们知道 他是用来做视频录制,可以生成直播流的工具,是一款开源软件,当前斗魚等直播平台 都是在这个基础上进行开发;该软件官方文档 支持 16 国语言,可见其流程程序;"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://obsproject.com/"},children:[{type:"text",value:"feature"}]},{type:"text",value:":"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"高性能实时视频音频捕获与合并;"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"视频数据来源广;\n可以从图片, 文本,浏览器,屏幕,摄像头等获取视频流;"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"多场景化,无缝切换;"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"可以实现实时播放;\n(推流)将本地生成的视频流实时推送到 youtube,\bmixer, 优酷,斗鱼等视频平台,其他人可以直接收看,后面又可以看录播内容;"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"合成视频布局自定义处理;\n通过简单的可视化拖拽实现多个视频的布局"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"插件机制可扩展;\n强大的程序猿通过编写脚本插件等实现定制功能;"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"多平台支持, windows mac linux 支持;"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"obs 直播摄像头透明背景怎么弄"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"经常在 youtube 上看到下图类似的视频,人物 \b 跃然纸上,又很少影响讲解内容的地方; 如何做到呢?\n\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/v2-5963caab0b462113a6c0fce42ca59e35_hd-aa63fa577ed2ad30ddcb71421d684a0d-63130.jpg",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 550px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 47.63636363636364%; position: relative; bottom: 0; left: 0; background-image: url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEDBf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB51uOVFf/xAAaEAEAAQUAAAAAAAAAAAAAAAABAAIQERMx/9oACAEBAAEFAgmbVrrez//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABcQAAMBAAAAAAAAAAAAAAAAAAACEDH/2gAIAQEABj8Cmi3/xAAZEAADAAMAAAAAAAAAAAAAAAAAATEQEUH/2gAIAQEAAT8hpwaSI2xQvJ//2gAMAwEAAgADAAAAELMP/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8QJ//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPxCxj//EABsQAQADAAMBAAAAAAAAAAAAAAEAESExQVGB/9oACAEBAAE/EBFJS8F6lwGF2ks8fYoFgWi+JoXuQ0L2f//Z'); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"v2 5963caab0b462113a6c0fce42ca59e35 hd",title:"",src:"/static/v2-5963caab0b462113a6c0fce42ca59e35_hd-aa63fa577ed2ad30ddcb71421d684a0d-63130.jpg",srcSet:["/static/v2-5963caab0b462113a6c0fce42ca59e35_hd-aa63fa577ed2ad30ddcb71421d684a0d-202ec.jpg 200w","/static/v2-5963caab0b462113a6c0fce42ca59e35_hd-aa63fa577ed2ad30ddcb71421d684a0d-900dc.jpg 400w","/static/v2-5963caab0b462113a6c0fce42ca59e35_hd-aa63fa577ed2ad30ddcb71421d684a0d-63130.jpg 550w"],sizes:["(max-width:","550px)","100vw,","550px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"简单来说,把有绿幕的视频流逐帧做”扣图”处理, 然后与另一视频源合并;将处理过程可视化便可见下图"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://blog.csdn.net/huanghuangjin/article/details/81461040"},children:[{type:"text",value:"图片绿幕处理算法"}]},{type:"text",value:"\n"},{type:"element",tagName:"img",properties:{src:"/20180806224311406-ecf17910d103d2c8afff176abd716bdf.gif",width:922,hegiht:"922x500",align:"center"},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\b\b 做为一个程序员, \b\b 肯定要死磕到底,如何实现这一流程呢?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"我们的第一印象,图片由像素组成的,将特征点(绿幕)逐一判断,如果符合就设置为透明.这样就需要两个循环,多层循环视频流里每一 \b 帧图像,内层 \b 循环 \b 图像的每一个像素点,如果在阀值范围内,则设置为透明;"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"代码很简单, 当然如果你写下去会发现 \b 效率极差. 哈哈."},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\n其实这个逻辑 openCV\b 已经给我们做到了封装,其算法都是通过 \b\b 矩阵运算,故性能有所保障;\n其两个步骤便可实现"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"通过 \b 阀值与源图片文件得到图像掩码(二值化,即下图中的黑白图);"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"将掩码从源图像中获取透明效果图,再将透明效果图与另一视频源做合并 处理即可;"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"img",properties:{src:"/20180806224311406-ecf17910d103d2c8afff176abd716bdf.gif",width:922,hegiht:"922x500",align:"center"},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://blog.csdn.net/huanghuangjin/article/details/81461040"},children:[{type:"text",value:"OpenCV 之图像分割(六) 绿幕背景视频抠图"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://zhuanlan.zhihu.com/p/34608752"},children:[{type:"text",value:"绿屏抠像教学"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"插件实现"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"(obs plugins 官方文档)[https://obsproject.com/docs/plugins.html]"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"偷个懒 这块暂时没用到,后面再看"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"有那些插件"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\b"},{type:"element",tagName:"a",properties:{href:"http://www.obsapp.com/apps/"},children:[{type:"text",value:"斗鱼相关插件"}]},{type:"text",value:"\n"},{type:"element",tagName:"a",properties:{href:"http://www.obsapp.com/article/4173.html"},children:[{type:"text",value:"斗图"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"相关资料"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://www.obsapp.com/"},children:[{type:"text",value:"obsapp"}]},{type:"text",value:"\n"},{type:"element",tagName:"a",properties:{href:"https://obsproject.com/"},children:[{type:"text",value:"obs 官网"}]},{type:"text",value:"\n"},{type:"element",tagName:"a",properties:{href:"http://www.obsapp.net/"},children:[{type:"text",value:"obs 中文网"}]},{type:"text",value:"\n"},{type:"element",tagName:"a",properties:{href:"https://juejin.im/post/5b14cacae51d45068b495725"},children:[{type:"text",value:"obs+node-media-server+flv.js 实现录播和直播"}]}]}],data:{quirksMode:!1}},fields:{slug:"/网红工具了解下-obs直播教学/",prefix:"2018-12-25"},frontmatter:{title:"网红工具了解下",subTitle:"obs直播教学",cover:{childImageSharp:{resize:{src:"/static/obs-b47ce5d09c0e58424333dc9b547bd3f5-ada8c.jpeg"}}}}},author:{id:"/Users/dong/dong/blogs/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>游大千世界,看大千世界,认知世界!</p>"},footnote:{id:"/Users/dong/dong/blogs/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<p>I am a coder who solves the problem<a href="/about/">contact</a></p>'},site:{siteMetadata:{facebook:{appId:"coder.yang2001@gmail.com"}}}},pathContext:{slug:"/网红工具了解下-obs直播教学/"}}}});
//# sourceMappingURL=path---网红工具了解下-obs直播教学-2c6753a4e55dfe4a5470.js.map