# Nginx note #
Nginx 学习/运维使用笔记。

## Nginx 安装 ##
Nginx学习笔记：安装 nginx-1.2.3 参考《Nginx高性能Web服务器详解》

1. 上传 nginx-1.2.3.tar.gz 到 VMware 中的 CentOS7 服务系统中。创建目录 `/Nginx_123/`,复制文件 `nginx-1.2.3.tar.gz` 到目录 `/Nginx_123`，并解压文件 `tar xf /Nginx_123/nginx-1.2.3.tar.gz` 进入目录 `/Nginx_123` 查看目录 `ls -l`:

	![nginux 解压后目录](https://i.imgur.com/hvoR4fU.png)
	
	
	- src 目录中存放了Nginx软件的所有源代码。
	- man 目录中存放了Nginx软件的帮助文档，Nginx安装完成后，使用man命令可以查看：
	    `man nginx`
	- html 目录和conf目录中存放的内容和Windows版本的同名目录相同。
	- auto 目录中存放了大量脚本文件，和configure脚本程序有关。
		- 进入 auto 目录
			- ![nginx-1.2.3/auto/-示例](https://i.imgur.com/8mt8Pbq.png)
		- 职能划分：
			- os/ 目录下的脚本负责检查环境。
			- modules/ 目录下的脚本负责检查模块。
			- options/ 目录下的脚本负责处理脚本参数。
			- 文件（have、nohave、make及install等）负责输出信息到生成文件。
			- feature 用于脚本自身服务。
	- configure 文件是 Nginx 软件的自动脚本程序。运行 configure 自动脚本一般会完成两项工作：一是检查环境，根据环境检查结果生成 C 代码；二是生成编译代码需要的 Makefile 文件。--参考：《Nginx高性能Web服务器详解》
		
	- CHANGES、LICENSE(zlib)、README 为版本说明

2. 执行命令 `./configure --prefix=/Nginx_123/Nginx_123_Compile` 生成 MakeFile 文件，根据信息是否需要额外引用库。如下图：是执行后发现 OpenSSL 库没有发现，因此要查找是否安装 OpenSSL。
![示例图](https://i.imgur.com/Af03sqF.png)
	- `which openssl` 得到安装路径 `/usr/bin/openssl`，因此，重新执行命令 `./configure --prefix=/Nginx_123/Nginx_123_Compile --with-openssl=/usr/bin/openssl` ,结果如下图：
![示例图2](https://i.imgur.com/EBLaRrT.png)

3. 执行编译安装，`make && make install`,然后进入 `/Nginx_123/Nginx_123_Compile` 工作目录，查看目录 <b style="color:red;">`ls *`</b> 如下图：
![安装完成后](https://i.imgur.com/9M4V4RF.png)

4. nginx 的启动和停止控制：
	- nginx 运行时，会存在一个主进程和多个工作进程。`ps -ef | grep "nginx"` 查找 nginx 是否运行，也可得到：root主进程pid:69309 ，可以使用 `kill SIGNAL PID <pid>` 关闭。
	- ![启动nginx](https://i.imgur.com/mafRlue.png)
	


## Linux服务器升级PHP ##
因为当初腾讯云购买的时候选了 Ubuntu16.0.4 系统，搭配 lamp 环境，没有选择 lnmp 环境，导致今天升级 PHP 版本，折腾半天。（P.S. 虽然Apache处理PHP比Nginx好，但建议要考虑长远的情况，还是用Nginx更好，当初因为不会选，随便购买的服务，现在都是坑）

安装升级：

	sudo add-apt-repository ppa:ondrej/php //切换PHP库源，用于更新 PHP 版本
	sudo apt-get update //命令升级
	sudo apt-get upgrade php // PHP版本升级，然后是一大堆选择，本人都默认，下一步

![PHP7.0升级到7.2](https://i.imgur.com/5assrmo.png)

![升级后 cli 模式](https://i.imgur.com/LkX9JPo.png)

注意时候如果使用 浏览器打开是不一样的，仍旧是 `php 7.0.5` 的版本，需要进行如下操作：

Apache模块切换：（位置：`/etc/apache2/mods-available`)

	sudo a2dismod php7.0
	sudo a2denmod php7.2
	sudo /etc/init.d/apache2 restart //重启Apache 

输入域名，eg. http://xxx.com/phpinfo.php 查看信息。
![PHPinfo -- 成功](https://i.imgur.com/aMb0y35.png)


## backup ##
因决定使用 Nginx 替换腾讯云服务器中的 lamp 环境，使用 lnmp 环境，但因为 PHP7.0 升级到 PHP7.2 过程中，在 `/etc/php/7.2` 目录中没有 `fpm/` 目录，缺失相关文件 `php-fpm.conf` 文件，导致 Nginx 无法解析PHP7.2版本，因此备份文件，卸载 Apache + nginx + php + mysql 重新安装 lnmp 环境。

