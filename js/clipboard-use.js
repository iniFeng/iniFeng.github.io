"use strict";!function(){function n(){$(".markdown-body pre").each(function(){var n=$(this);0<n.find("code.mermaid").length||n.append('<button class="copy-btn" data-clipboard-snippet=""><i class="iconfont icon-copy"></i><span>Copy</span></button>')});var n=new ClipboardJS(".copy-btn",{target:function(n){return n.previousElementSibling}});$(".copy-btn").addClass(function(){var n=$("div.hljs, pre");if(0===n.length)return"copy-btn-dark";var o=n.css("background-color").replace(/rgba*\(/,"").replace(")","").split(",");return 127.5<.213*o[0]+.715*o[1]+.072*o[2]?"copy-btn-dark":"copy-btn-light"}()),n.on("success",function(n){n.clearSelection();var o=n.trigger.outerHTML;n.trigger.innerHTML="Success",setTimeout(function(){n.trigger.outerHTML=o},2e3)})}var o=window.onload;window.onload=function(){o&&o(),n()}}((window,document));