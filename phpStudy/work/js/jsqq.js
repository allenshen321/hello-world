document.writeln("<link rel=\"stylesheet\" type=\"text/css\" href=\"/work/css/jsqq.css\" />");
document.writeln("<div id=\"floatTools\" class=\"rides-cs\" style=\" top: 100px; \">");
document.writeln("  <div class=\"floatL\">");
document.writeln("  	<a id=\"aFloatTools_Show\" class=\"btnOpen\" title=\"查看在线客服\" style=\"top:20px;display:block\" href=\"javascript:void(0);\">展开</a>");
document.writeln("  	<a id=\"aFloatTools_Hide\" class=\"btnCtn\" title=\"关闭在线客服\" style=\"top:20px;display:none\" href=\"javascript:void(0);\">收缩</a>");
document.writeln("  </div>");
document.writeln("  <div id=\"divFloatToolsView\" class=\"floatR\" style=\"display: none;\">");
document.writeln("    <div class=\"cn\">");
document.writeln("      <div class=\"titZx\">在线客服</div>");
document.writeln("        <div class='qqkf'><div class='qqkf_neirong'><a href='tencent://message/?uin=3383029074amp;Site=技术支持4-冬儿&amp;Menu=yes' target='_blank' title='客服QQ：3383029074'><img src='http://www.jsqq.cn/images/q_1.gif' alt='技术支持4-冬儿'></a></div><div class='qqkf_neirong'><a href='tencent://message/?uin= 3420494087amp;Site= 技术支持5-珊兰&amp;Menu=yes' target='_blank' title='客服QQ： 3420494087'><img src='http://www.jsqq.cn/images/q_1.gif' alt=' 技术支持5-珊兰'></a></div><div class='qqkf_neirong'><a href='tencent://message/?uin= 2627836204amp;Site= 技术支持1-孙博&amp;Menu=yes' target='_blank' title='客服QQ： 2627836204'><img src='http://www.jsqq.cn/images/q_1.gif' alt=' 技术支持1-孙博'></a></div></div>");
document.writeln("        <img src=\"http://www.jsqq.cn/upload/weixin/201804261326104268.png\" class=\"weixin\" />");
document.writeln("        <div class='dhkf'><div class='dhkf_neirong'><strong>技术服务热线</strong><span class='tel_2'>020-32068595</span></div><div class='dhkf_neirong'><strong> 免费咨询热线</strong><span class='tel_2'> 400-020-200</span></div></div>");
document.writeln("        <div class=\"myqq\">");
document.writeln("            <a href=\"http://www.jsqq.cn/\" target=\"_blank\">制作我的QQ客服</a>");
document.writeln("            <div class=\"div_clear\"></div>");
document.writeln("        </div>");
document.writeln("    </div>");
document.writeln("  </div>");
document.writeln("</div>");
document.writeln("<script src=\"http://www.jsqq.cn/kf/4/js/jquery.min.js\"></script>");
document.writeln("<script>");
// document.writeln("	$(function(){");
// document.writeln("		$(\"#aFloatTools_Show\").click(function(){");
// document.writeln("			$('#divFloatToolsView').animate({width:'show',opacity:'show'},100,function(){$('#divFloatToolsView').show();});");
// document.writeln("			$('#aFloatTools_Show').hide();");
// document.writeln("			$('#aFloatTools_Hide').show();				");
// document.writeln("		});");
// document.writeln("		$(\"#aFloatTools_Hide\").click(function(){");
// document.writeln("			$('#divFloatToolsView').animate({width:'hide', opacity:'hide'},100,function(){$('#divFloatToolsView').hide();});");
// document.writeln("			$('#aFloatTools_Show').show();");
// document.writeln("			$('#aFloatTools_Hide').hide();	");
// document.writeln("		});");
// document.writeln("	});");
document.writeln(" 	jQuery(function($){");
document.writeln("		$(\"#floatTools>.floatL\").click(function(){");
document.writeln("      alert(\"22\");");
document.writeln("			$('#divFloatToolsView').toggle(100);");
document.writeln("			$('#aFloatTools_Show').toggle();				");
document.writeln("			$('#aFloatTools_Hide').toggle();				");
document.writeln("		});");
document.writeln("	});");
document.writeln("</script>");